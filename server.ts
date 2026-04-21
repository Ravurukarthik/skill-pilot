import express from "express";
import path from "path";
import cors from "cors";
import multer from "multer";
import nodemailer from "nodemailer";
import puppeteer from "puppeteer";
import axios from "axios";
import * as cheerio from "cheerio";
import https from "https";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const upload = multer({ storage: multer.memoryStorage() });

// Simple cache for proxy
const proxyCache = new Map<string, { html: string, timestamp: number }>();
const CACHE_TTL = 1 * 60 * 1000; // 1 minute

const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // For better compatibility with various site certificates in proxy
  keepAlive: true,
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Route for Proxying Content (to bypass X-Frame-Options)
  app.get("/api/proxy", async (req, res) => {
    const targetUrl = req.query.url as string;
    if (!targetUrl) return res.status(400).json({ error: "URL is required" });

    // Check Cache
    const cached = proxyCache.get(targetUrl);
    if (cached && (Date.now() - cached.timestamp < CACHE_TTL)) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.removeHeader('X-Frame-Options');
      res.removeHeader('Content-Security-Policy');
      return res.send(cached.html);
    }

    try {
      // Strip fragment from targetUrl before axios request
      const cleanTargetUrl = targetUrl.split('#')[0];
      const urlObj = new URL(cleanTargetUrl);
      const origin = urlObj.origin;

      console.log(`[Proxy] Fetching: ${cleanTargetUrl}`);

      const response = await axios.get(cleanTargetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Referer': origin,
          'Origin': origin,
          'Connection': 'keep-alive',
          'Sec-Ch-Ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
          'Sec-Ch-Ua-Mobile': '?0',
          'Sec-Ch-Ua-Platform': '"Windows"',
          'Upgrade-Insecure-Requests': '1'
        },
        timeout: 45000,
        httpsAgent,
        maxRedirects: 20,
        responseType: 'arraybuffer',
        validateStatus: () => true,
      });

      // Decompress / Convert to String if it's likely HTML
      const contentType = response.headers['content-type'] || 'text/html';
      const isHtml = contentType.toLowerCase().includes('text/html');

      // Get the final URL after redirects
      const effectiveUrl = response.request.res.responseUrl || cleanTargetUrl;
      const effectiveOrigin = new URL(effectiveUrl).origin;

      console.log(`[Proxy] Status: ${response.status} | Content-Type: ${contentType} | Final URL: ${effectiveUrl}`);

      if (response.status >= 400 && response.status !== 404) {
        console.warn(`[Proxy] Warning: Status ${response.status} for ${targetUrl}`);
      }

      // If not HTML, serve raw data directly
      if (!isHtml) {
        res.setHeader('Content-Type', contentType);
        res.removeHeader('X-Frame-Options');
        res.removeHeader('Content-Security-Policy');
        return res.send(response.data);
      }

      let htmlContents = response.data.toString('utf8');
      const $ = cheerio.load(htmlContents);
      
      // Use a robust absolute proxy base URL that works even with the <base> tag active
      const proto = req.headers['x-forwarded-proto'] || req.protocol || 'https';
      const host = req.get('host');
      const absoluteProxyBase = `${proto}://${host}/api/proxy?url=`;
      
      const protocol = proto;
      const proxyBaseUrl = absoluteProxyBase;

      // Fix relative links for images, scripts, and links using effectiveUrl
      $('img, script, link, a, source, form, iframe, video, audio, object, embed').each((_, element) => {
        const el = $(element);
        ['src', 'href', 'srcset', 'data-src', 'data-href', 'action', 'data'].forEach(attr => {
          let val = el.attr(attr);
          if (!val) return;

          // Skip special links
          if (val.startsWith('javascript:') || val.startsWith('mailto:') || val.startsWith('tel:') || val.startsWith('#')) {
            return;
          }

          if (!val.startsWith('http') && !val.startsWith('//') && !val.startsWith('data:')) {
            try {
              // Handle comma-separated srcset
              if (attr === 'srcset') {
                const parts = val.split(',').map(part => {
                  const [urlPart, descriptor] = part.trim().split(/\s+/);
                  if (urlPart && !urlPart.startsWith('http') && !urlPart.startsWith('//') && !urlPart.startsWith('data:')) {
                    return `${new URL(urlPart, effectiveUrl).href}${descriptor ? ' ' + descriptor : ''}`;
                  }
                  return part;
                });
                el.attr(attr, parts.join(', '));
              } else {
                const absoluteUrl = new URL(val, effectiveUrl).href;
                
                // CRITICAL: Rewrite navigation links and form actions to point BACK to our proxy
                if ((attr === 'href' && element.tagName === 'a') || (attr === 'action' && element.tagName === 'form') || (attr === 'src' && element.tagName === 'iframe')) {
                  el.attr(attr, `${proxyBaseUrl}${encodeURIComponent(absoluteUrl)}`);
                } else {
                  // For all other assets, use absolute URLs but ensure they match current security context
                  // If we are on HTTPS and target is HTTP, some assets might be blocked. 
                  // We'll use protocol-relative where appropriate.
                  let finalUrl = absoluteUrl;
                  if (absoluteUrl.startsWith('http:')) {
                    finalUrl = absoluteUrl.replace('http:', ''); // Make protocol-relative: //domain/path
                  }
                  el.attr(attr, finalUrl);
                }
              }
            } catch (e) {
              // Ignore invalid URLs
            }
          } else if (val.startsWith('http') || val.startsWith('//')) {
            // Even if it's already an absolute URL, we want navigation links to stay in the proxy
            if ((attr === 'href' && element.tagName === 'a') || (attr === 'action' && element.tagName === 'form') || (attr === 'src' && element.tagName === 'iframe')) {
              const fullUrl = val.startsWith('//') ? `${protocol}:${val}` : val;
              el.attr(attr, `${proxyBaseUrl}${encodeURIComponent(fullUrl)}`);
            }
          }
        });

        // Strip subresource integrity to prevent browser blocks when we modify headers
        el.removeAttr('integrity');
      });

      // Strip security meta tags that might block framing or JS
      $('meta[http-equiv="Content-Security-Policy" i], meta[http-equiv="X-Frame-Options" i], meta[name="referrer"]').remove();
      
      // Strip existing base tags to avoid conflict with our injected one
      $('base').remove();

      // Strip common frame-busting scripts more aggressively
      $('script').each((_, element) => {
        let scriptContent = $(element).html();
        if (scriptContent) {
          // Replace patterns instead of removing the whole script to avoid breaking site logic
          const patterns = [
            /window\.top/g, /window\.parent/g, /top\.location/g, /parent\.location/g, /self\.location/g,
            /if\s*\(\s*top\s*!==?\s*self\s*\)/g, /if\s*\(\s*self\s*!==?\s*top\s*\)/g,
            /if\s*\(\s*window\.top\s*!==?\s*window\.self\s*\)/g,
            /document\.documentElement\.style\.display\s*=\s*['"]none['"]/g,
            /document\.body\.style\.display\s*=\s*['"]none['"]/g
          ];
          
          let modified = false;
          patterns.forEach(p => {
            if (p.test(scriptContent!)) {
              scriptContent = scriptContent!.replace(p, 'window.self'); 
              modified = true;
            }
          });

          if (modified) {
            $(element).html(scriptContent);
          }
        }
      });
      
      // Force display:block on body to override any CSS-based frame busting
      const injectionTarget = $('head').length > 0 ? $('head') : $('body');
      
      if (injectionTarget.length > 0) {
        const injectionScript = `
          <script>
            (function() {
              try {
                // Total Transparency Layer: Make this window look like a primary top-level window
                const target = window;
                const mockTop = { 
                  get: function() { return target; },
                  configurable: true
                };
                
                Object.defineProperty(target, 'top', mockTop);
                Object.defineProperty(target, 'parent', mockTop);
                Object.defineProperty(target, 'opener', { get: () => null, configurable: true });
                
                // Navigation Proxying: Ensure JS redirects stay inside the tunnel
                const getProxiedUrl = (url) => {
                  if (!url || typeof url !== 'string') return url;
                  if (url.includes('/api/proxy')) return url;
                  try {
                    const u = new URL(url, window.location.href);
                    return '/api/proxy?url=' + encodeURIComponent(u.href);
                  } catch (e) { return url; }
                };

                const originalReplace = target.location.replace;
                target.location.replace = function(url) {
                  return originalReplace.call(target.location, getProxiedUrl(url));
                };
                
                const originalAssign = target.location.assign;
                target.location.assign = function(url) {
                  return originalAssign.call(target.location, getProxiedUrl(url));
                };

                // Visibility Watchdog: Force UI visibility regardless of site scripts
                const forceVisible = () => {
                  try {
                    const el = document.documentElement;
                    const b = document.body;
                    const styles = {
                      'display': 'block',
                      'visibility': 'visible',
                      'opacity': '1',
                      'background-color': 'white'
                    };
                    
                    if (el) {
                      for (const [prop, val] of Object.entries(styles)) {
                        if (el.style.getPropertyValue(prop) !== val) {
                          el.style.setProperty(prop, val, 'important');
                        }
                      }
                    }
                    if (b) {
                      for (const [prop, val] of Object.entries(styles)) {
                        if (b.style.getPropertyValue(prop) !== val) {
                          b.style.setProperty(prop, val, 'important');
                        }
                      }
                    }
                  } catch (e) {}
                };

                forceVisible();
                const observer = new MutationObserver(forceVisible);
                observer.observe(document.documentElement, { attributes: true, childList: true, subtree: true });
                
                // Navigation Interceptor
                document.addEventListener('click', (e) => {
                  const link = e.target.closest('a');
                  if (link && link.href && !link.href.includes('/api/proxy') && !link.href.startsWith('javascript:')) {
                    try {
                      const url = new URL(link.href);
                      // If it's a cross-origin link or has target="_blank" / "_top" / "_parent", force it through proxy
                      if (url.origin !== window.location.origin || ['_blank', '_top', '_parent'].includes(link.target)) {
                        e.preventDefault();
                        window.location.href = getProxiedUrl(link.href);
                      }
                    } catch (err) {}
                  }
                }, true);

                // Open Proxy
                window.open = function(url) {
                  window.location.href = getProxiedUrl(url);
                  return null;
                };

                // Suppress common error dialogs
                window.alert = function() { console.log('Blocked alert:', arguments); };
                window.confirm = function() { return true; };
                
                // Periodically trigger resize to wake up lazy loaders
                setInterval(() => window.dispatchEvent(new Event('resize')), 2000);
              } catch (e) {}
            })();
          </script>
          <base href="${effectiveUrl}">
          <style>
            html, body { 
              display: block !important; 
              visibility: visible !important; 
              opacity: 1 !important; 
              pointer-events: auto !important;
              background-color: white !important;
            }
          </style>
        `;

        if ($('head').length > 0) {
          $('head').prepend(injectionScript);
        } else {
          $('body').prepend(injectionScript);
        }
      }

      const finalHtml = $.html();

      // Set proper content type and strip ALL security headers that could block framing
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.removeHeader('X-Frame-Options');
      res.removeHeader('Content-Security-Policy');
      res.removeHeader('Cross-Origin-Embedder-Policy');
      res.removeHeader('Cross-Origin-Opener-Policy');
      res.removeHeader('Cross-Origin-Resource-Policy');
      res.setHeader('X-XSS-Protection', '0');
      
      // Update Cache
      if (response.status === 200) {
        proxyCache.set(targetUrl, { html: finalHtml, timestamp: Date.now() });
      }
      
      res.send(finalHtml);
    } catch (error: any) {
      console.error("Proxy Error:", error.message);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <body style="background: #0f172a; color: #94a3b8; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; text-align: center; padding: 20px;">
            <div style="background: #1e293b; padding: 40px; border-radius: 24px; border: 1px solid #334155; max-width: 400px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
              <div style="width: 64px; height: 64px; background: #ef4444; color: white; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; font-size: 32px;">⚠️</div>
              <h1 style="color: white; font-size: 20px; margin: 0 0 12px;">Display Restricted</h1>
              <p style="font-size: 14px; line-height: 1.6; margin: 0 0 32px;">This portal has advanced security that prevents integrated viewing. Please use the direct link below.</p>
              <a href="${targetUrl}" target="_blank" style="display: block; background: #4f46e5; color: white; text-decoration: none; padding: 14px; border-radius: 12px; font-weight: bold; font-size: 14px; transition: all 0.2s;">OPEN OFFICIAL SITE</a>
              <p style="font-size: 10px; color: #475569; margin-top: 24px; font-family: monospace;">Error: ${error.message}</p>
            </div>
          </body>
        </html>
      `);
    }
  });

  // API Route for Payment Notification
  app.post("/api/send-payment-notification", upload.single("proof"), async (req, res) => {
    const { userEmail, userId, paymentDate } = req.body;
    const file = req.file;

    if (!userEmail || !file) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Configure Nodemailer
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const adminUrl = `${process.env.APP_URL || 'https://ais-dev-4q2xmnqridiifrkuxaeylc-17136732183.asia-northeast1.run.app'}`;
      const approveUrl = `${adminUrl}/?userId=${userId}&action=approve`;
      const rejectUrl = `${adminUrl}/?userId=${userId}&action=reject`;
      
      const mailOptions = {
        from: process.env.SMTP_USER,
        to: "ravurukarthik740@gmail.com",
        subject: `New Payment Proof Submission - ${userEmail}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 16px;">
            <h2 style="color: #4f46e5; margin-bottom: 20px;">New Payment Proof Submitted</h2>
            <p>A new payment proof has been submitted for review by <strong>${userEmail}</strong>.</p>
            <div style="background: #f9fafb; padding: 20px; border-radius: 12px; margin: 20px 0; border: 1px solid #f3f4f6;">
              <p style="margin: 5px 0;"><strong>User Email:</strong> ${userEmail}</p>
              <p style="margin: 5px 0;"><strong>User ID:</strong> ${userId}</p>
              <p style="margin: 5px 0;"><strong>Payment Date:</strong> ${paymentDate}</p>
            </div>
            <div style="display: flex; gap: 15px; margin-bottom: 30px;">
              <a href="${approveUrl}" style="background: #10b981; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; margin-right: 10px;">Accept & Upgrade</a>
              <a href="${rejectUrl}" style="background: #ef4444; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Reject Request</a>
            </div>
          </div>
        `,
        attachments: [{ filename: file.originalname, content: file.buffer }],
      };

      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Notification sent successfully" });
      } else {
        res.json({ success: true, message: "Notification logged (SMTP not configured)." });
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      res.status(500).json({ error: "Failed to send notification" });
    }
  });

  // API Route for Fetching Inter Results (Puppeteer Headless Browser)
  app.get("/api/fetch-inter-results", async (req, res) => {
    const { rollNumber, type } = req.query;

    if (!rollNumber) {
      return res.status(400).json({ error: "Hall Ticket Number is required" });
    }

    const hallTicket = rollNumber.toString();
    const resultType = type?.toString() || '1st_REGULAR';
    
    // Target URLs for scraping
    const targetUrls: Record<string, string> = {
      '1st_REGULAR': 'https://results.eenadu.net/exam-results/ap-inter-1st-year-results-2026-general',
      '2nd_REGULAR': 'https://results.eenadu.net/exam-results/ap-inter-2nd-year-results-2026-general',
      '1st_SUPPLY': 'https://results.eenadu.net/exam-results/ap-inter-1st-year-adv-supply-results-2026-general',
      '2nd_SUPPLY': 'https://results.eenadu.net/exam-results/ap-inter-2nd-year-adv-supply-results-2026-general'
    };

    const targetUrl = targetUrls[resultType] || targetUrls['1st_REGULAR'];
    
    let browser;
    try {
      console.log(`Starting extraction for HT: ${hallTicket} on ${targetUrl}`);
      
      browser = await puppeteer.launch({
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu'
        ]
      });

      const page = await browser.newPage();
      
      // Speed Optimization: Block heavy resources only (keeping CSS for script compatibility)
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        const resourceType = req.resourceType();
        if (['image', 'font', 'media'].includes(resourceType)) {
          req.abort();
        } else {
          req.continue();
        }
      });

      await page.setViewport({ width: 1280, height: 800 });
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36');

      // 2. Open the result website - Optimized navigation
      try {
        // Start with domcontentloaded (much faster on ad-heavy sites)
        await page.goto(targetUrl, { waitUntil: 'domcontentloaded', timeout: 20000 });
      } catch (err) {
        if (browser) await browser.close();
        return res.status(503).json({ error: "Source website is slow or down. Please try again." });
      }

      // Check for 'Coming Soon' or similar
      const bodyText = await page.evaluate(() => document.body.innerText.toUpperCase());
      if (bodyText.includes('COMING SOON') || bodyText.includes('WILL BE RELEASED') || bodyText.includes('RESULTS NOT YET')) {
         await browser.close();
         return res.status(503).json({ error: "AP Inter 2026 Results have not been released yet on this portal." });
      }

      // Check for blocking
      if (bodyText.includes('CLOUDFLARE') || bodyText.includes('ACCESS DENIED') || bodyText.includes('CAPTCHA')) {
        await browser.close();
        return res.status(403).json({ error: "Source website blocked automated access (CAPTCHA detected)." });
      }

      // 3 & 4. Enter HT and Submit
      const isResultPage = async (target: any) => {
        try {
          return await target.evaluate(() => {
            const text = document.body.innerText.toUpperCase();
            return text.includes('MARKS') || text.includes('GRADE') || text.includes('RESULT') || document.querySelector('table') !== null;
          });
        } catch (e) {
          return false;
        }
      };

      let alreadyOnResultPage = await isResultPage(page);
      if (!alreadyOnResultPage) {
        const frames = page.frames();
        for (const frame of frames) {
          if (frame === page.mainFrame()) continue;
          if (await isResultPage(frame)) {
            alreadyOnResultPage = true;
            break;
          }
        }
      }

      let htInputFound = false;
      const selectors = {
        input: '#hallticket, #HallTicket, #txtHTNO, #htno, [name*="ht"], [id*="ht"], [placeholder*="Hall"], [name*="roll"], [id*="roll"], [name*="htno"]',
        submit: '#btnSubmit, .btnsubmit, #Submit, button[type="submit"], input[type="submit"], .btn-primary, button[id*="submit"], input[id*="submit"], .submit-btn, #btn_submit'
      };

      const tryFillForm = async (target: any) => {
        try {
          const input = await target.waitForSelector(selectors.input, { timeout: 5000 }).catch(() => null);
          if (input) {
            await input.click(); // Ensure focus
            await input.focus();
            
            // Clear field
            await target.evaluate((sel: string) => {
              const el = document.querySelector(sel) as HTMLInputElement;
              if (el) el.value = '';
            }, selectors.input);
            
            await input.type(hallTicket, { delay: 20 });
            
            const submit = await target.$(selectors.submit).catch(() => null);
            if (submit) {
              await submit.click();
              return true;
            } else {
              await input.press('Enter');
              return true;
            }
          }
        } catch (e) {
          return false;
        }
        return false;
      };

      if (!alreadyOnResultPage) {
        // Try main page
        htInputFound = await tryFillForm(page);

        // Try iframes if not found (very common in result portals)
        if (!htInputFound) {
          const frames = page.frames();
          for (const frame of frames) {
            if (frame === page.mainFrame()) continue;
            htInputFound = await tryFillForm(frame);
            if (htInputFound) break;
          }
        }

        if (!htInputFound) {
          console.log("HT input form not found. Proceeding to check if results are present anyway.");
        }
      } else {
        console.log("Already on a result page. Skipping form submission.");
        htInputFound = true;
      }

      // 5. Wait for result page - Optimized with multi-target polling
      let foundResults = false;
      let startTime = Date.now();
      const MAX_WAIT = 15000;

      while (Date.now() - startTime < MAX_WAIT) {
        const checkPage = async (target: any) => {
          try {
            return await target.evaluate(() => {
              const text = document.body.innerText.toUpperCase();
              return text.includes('MARKS') || text.includes('RESULT') || text.includes('GRADE') || document.querySelector('table') !== null;
            });
          } catch (e) { return false; }
        };

        if (await checkPage(page)) {
          foundResults = true;
          break;
        }

        const frames = page.frames();
        for (const frame of frames) {
          if (await checkPage(frame)) {
            foundResults = true;
            break;
          }
        }
        
        if (foundResults) break;
        await new Promise(r => setTimeout(r, 1000));
      }

      if (!foundResults) {
        const content = await page.content();
        if (content.includes('Invalid') || content.includes('not found')) {
           await browser.close();
           return res.status(404).json({ error: "Invalid Hall Ticket Number" });
        }
        await browser.close();
        return res.status(404).json({ error: "Result not found or unavailable (Server Timeout)" });
      }

      // 6. Extract data from all frames (merging the most complete one)
      const extractFromTarget = async (target: any) => {
        return await target.evaluate((ht: string) => {
          const findByText = (textArray: string[]) => {
            const els = Array.from(document.querySelectorAll('td, th, span, label, p, div, b, strong'));
            for (const text of textArray) {
              const found = els.find(el => {
                const content = (el.textContent || '').trim().toUpperCase();
                return content === text.toUpperCase() || content.startsWith(text.toUpperCase() + ':') || content.startsWith(text.toUpperCase() + ' ');
              }) as HTMLElement | undefined;
              
              if (found) {
                // Try next sibling text content
                if (found.nextElementSibling?.textContent?.trim()) return found.nextElementSibling.textContent.trim();
                
                // Try parent's next cell if in a table
                const parent = found.parentElement;
                if (parent && parent.tagName === 'TR') {
                  const cells = Array.from((parent as HTMLTableRowElement).cells);
                  const idx = cells.indexOf(found as HTMLTableCellElement);
                  if (idx !== -1 && cells[idx + 1]) return cells[idx + 1].textContent?.trim();
                }

                // Try parent's child if found is a label-like element
                const children = Array.from(parent?.children || []);
                const foundIdx = children.indexOf(found);
                if (foundIdx !== -1 && children[foundIdx + 1]) return children[foundIdx + 1].textContent?.trim();
                
                // If text is "NAME: JOHN", extract "JOHN"
                const rawContent = (found.textContent || '').trim();
                if (rawContent.toUpperCase().startsWith(text.toUpperCase())) {
                  const parts = rawContent.split(':');
                  if (parts.length > 1) return parts.slice(1).join(':').trim();
                }
              }
            }
            return null;
          };

          const name = findByText(['NAME', 'CANDIDATE NAME', 'STUDENT NAME', 'CANDIDATE']);
          const total = findByText(['TOTAL', 'GRAND TOTAL', 'AGGREGATE', 'TOTAL MARKS']);
          const grade = findByText(['GRADE', 'RESULT', 'STATUS', 'FINAL RESULT']);

          const subjects: any[] = [];
          const tables = Array.from(document.querySelectorAll('table'));
          
          tables.forEach(table => {
            const rows = Array.from(table.rows);
            rows.forEach(row => {
              const cells = Array.from(row.cells).map(c => (c.textContent || '').trim());
              if (cells.length >= 2) {
                // Find a numeric value that isn't the first cell (which is often a sl.no or subject)
                // and isn't too large (marks are usually <= 100 or 150)
                let marks = "";
                // Search from right to left for the first numeric cell that looks like marks
                for (let i = cells.length - 1; i > 0; i--) {
                  const val = cells[i];
                  if (/^\d+$/.test(val)) {
                    const numVal = parseInt(val);
                    if (numVal >= 0 && numVal <= 150) {
                      marks = val;
                      break;
                    }
                  }
                }

                const firstCell = cells[0];
                if (marks && firstCell.length > 3) {
                  // Ignore common labels mistakenly caught as subjects
                  const blacklist = ['NAME', 'ROLL', 'TOTAL', 'RESULT', 'GRADE', 'DATE', 'CENTER', 'HALL', 'TICKET', 'YEAR', 'MARKS'];
                  if (!blacklist.some(k => firstCell.toUpperCase().includes(k))) {
                    subjects.push({
                      subject: firstCell.toUpperCase(),
                      marks: marks
                    });
                  }
                }
              }
            });
          });

          // Fallback parsing for non-table structures (regex)
          let finalName = name;
          if (!finalName) {
             const bodyText = document.body.innerText;
             const nameMatch = bodyText.match(/CANDIDATE NAME\s*[:\-]?\s*([A-Z\s.]+)/i) || bodyText.match(/NAME\s*[:\-]?\s*([A-Z\s.]+)/i);
             if (nameMatch) finalName = nameMatch[1].trim();
          }

          return { name: finalName, hallticket: ht, subjects, total, grade };
        }, hallTicket);
      };

      let finalData: any = await extractFromTarget(page);
      
      // If main page is empty, check all frames
      if (!finalData.name || finalData.subjects.length === 0) {
        for (const frame of page.frames()) {
          if (frame === page.mainFrame()) continue;
          const frameData: any = await extractFromTarget(frame);
          if (frameData.subjects.length > finalData.subjects.length) {
            finalData = frameData;
          } else if (!finalData.name && frameData.name) {
            finalData.name = frameData.name;
          }
        }
      }

      await browser.close();

      if (!finalData.name && finalData.subjects.length === 0) {
        return res.status(404).json({ error: "Result not found or unavailable" });
      }

      return res.json(finalData);

    } catch (error: any) {
      if (browser) await browser.close();
      return res.status(500).json({ error: "Result not found or unavailable" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer } = await import("vite");
    const vite = await createServer({ server: { middlewareMode: true }, appType: "spa" });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => res.sendFile(path.join(distPath, "index.html")));
  }

  app.listen(PORT, "0.0.0.0", () => console.log(`Server running on http://localhost:${PORT}`));
}

startServer();
