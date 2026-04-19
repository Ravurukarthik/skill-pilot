import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cors from "cors";
import multer from "multer";
import nodemailer from "nodemailer";
import puppeteer from "puppeteer";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const upload = multer({ storage: multer.memoryStorage() });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

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
    const vite = await createViteServer({ server: { middlewareMode: true }, appType: "spa" });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => res.sendFile(path.join(distPath, "index.html")));
  }

  app.listen(PORT, "0.0.0.0", () => console.log(`Server running on http://localhost:${PORT}`));
}

startServer();
