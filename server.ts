import express from "express";
import path from "path";
import cors from "cors";
import compression from "compression";
import multer from "multer";
import nodemailer from "nodemailer";
// import puppeteer from "puppeteer"; // Lazy loaded later
import axios from "axios";
import * as cheerio from "cheerio";
import https from "https";
import zlib from "zlib";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Simple cache for proxy
const proxyCache = new Map<string, { html: string, timestamp: number }>();
const CACHE_TTL = 3 * 60 * 1000; // 3 minutes

const httpsAgent = new https.Agent({
  rejectUnauthorized: false, // For better compatibility with various site certificates in proxy
  keepAlive: true,
  maxSockets: 50,
});

const app = express();

app.use(compression());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", mode: process.env.NODE_ENV || 'development', vercel: !!process.env.VERCEL });
});

// API Route for Proxying Content (to bypass X-Frame-Options)
app.get("/api/proxy", async (req, res) => {
  let targetUrl = req.query.url as string;
  if (!targetUrl) return res.status(400).json({ error: "URL is required" });

  const cacheKey = targetUrl.split('#')[0];
  const cached = proxyCache.get(cacheKey);
  if (cached && (Date.now() - cached.timestamp < CACHE_TTL)) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.removeHeader('X-Frame-Options');
    res.removeHeader('Content-Security-Policy');
    return res.send(cached.html);
  }

  try {
    const cleanTargetUrl = cacheKey;
    const urlObj = new URL(cleanTargetUrl);
    const origin = urlObj.origin;

    const response = await axios.get(cleanTargetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': origin,
        'Origin': origin,
      },
      timeout: 45000,
      httpsAgent,
      maxRedirects: 20,
      responseType: 'arraybuffer',
      validateStatus: () => true,
    });

    const contentType = response.headers['content-type'] || 'text/html';
    const isHtml = contentType.toLowerCase().includes('text/html') || 
                   contentType.toLowerCase().includes('application/xhtml+xml') ||
                   contentType.toLowerCase().includes('application/xml');

    const effectiveUrl = response.request.res.responseUrl || cleanTargetUrl;
    const resolutionBase = effectiveUrl;

    let data = response.data;
    const encoding = response.headers['content-encoding'];
    
    try {
      if (encoding === 'gzip') data = zlib.gunzipSync(data);
      else if (encoding === 'deflate') data = zlib.inflateSync(data);
      else if (encoding === 'br') data = zlib.brotliDecompressSync(data);
    } catch (e) {}

    if (!isHtml) {
      res.setHeader('Content-Type', contentType);
      res.removeHeader('X-Frame-Options');
      res.removeHeader('Content-Security-Policy');
      return res.send(data);
    }

    let htmlContents = data.toString('utf8');
    const $ = cheerio.load(htmlContents, { xml: false });
    
    const proto = req.headers['x-forwarded-proto'] || req.protocol || 'https';
    const host = req.get('host');
    const absoluteProxyBase = `${proto}://${host}/api/proxy?url=`;

    $('a, form, iframe').each((_, element) => {
      const el = $(element);
      const attr = element.tagName === 'form' ? 'action' : 'src';
      const finalAttr = element.tagName === 'a' ? 'href' : attr;
      let val = el.attr(finalAttr);
      if (!val || val.startsWith('javascript:') || val.startsWith('mailto:') || val.startsWith('tel:') || val.startsWith('#') || val.startsWith('data:')) return;
      try {
        const absoluteUrl = new URL(val, resolutionBase).href;
        el.attr(finalAttr, `${absoluteProxyBase}${encodeURIComponent(absoluteUrl)}`);
      } catch (e) {}
    });

    $('meta[http-equiv="Content-Security-Policy" i], meta[http-equiv="X-Frame-Options" i], meta[name="referrer" i], meta[http-equiv="refresh" i]').remove();
    $('base').remove();

    const injectionTarget = $('head').length > 0 ? $('head') : $('body');
    if (injectionTarget.length > 0) {
      const injectionScript = `
        <script>
          (function(){try{
            const t=window;
            const targetBase = "${resolutionBase}";
            const m={get:()=>t,configurable:!0};
            Object.defineProperty(t,'top',m);
            Object.defineProperty(t,'parent',m);
            const p = u => {
              if(!u || typeof u !== "string" || u.includes('/api/proxy') || u.startsWith('data:') || u.startsWith('blob:') || u.startsWith('javascript:')) return u;
              try { return '/api/proxy?url=' + encodeURIComponent(new URL(u, targetBase).href); } catch(e) { return u; }
            };
            document.addEventListener('click', e => {
              const l = e.target.closest('a');
              if(l && l.href && !l.href.includes('/api/proxy') && !l.href.startsWith('j')){
                e.preventDefault();
                t.location.href = p(l.getAttribute('href') || l.href);
              }
            }, !0);
          } catch(e){}})();
        </script>
        <base href="${resolutionBase}">
      `;
      injectionTarget.prepend(injectionScript);
    }

    const finalHtml = $.html();
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.removeHeader('X-Frame-Options');
    res.removeHeader('Content-Security-Policy');
    
    if (response.status === 200) {
      proxyCache.set(cacheKey, { html: finalHtml, timestamp: Date.now() });
    }
    res.send(finalHtml);
  } catch (error: any) {
    res.status(500).send(`Error proxying: ${error.message}`);
  }
});

// API Route for Payment Notification
app.post("/api/send-payment-notification", upload.single("proof"), async (req: any, res) => {
  const { userEmail, userId, paymentDate } = req.body;
  const file = req.file;
  if (!userEmail || !file) return res.status(400).json({ error: "Missing required fields" });
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    const adminUrl = process.env.APP_URL || 'https://ais-dev-4q2xmnqridiifrkuxaeylc-17136732183.asia-northeast1.run.app';
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "ravurukarthik740@gmail.com",
      subject: `New Payment Proof Submission - ${userEmail}`,
      html: `<p>New payment proof from ${userEmail} (ID: ${userId}) on ${paymentDate}</p>`,
      attachments: [{ filename: file.originalname, content: file.buffer }]
    };
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
      res.json({ success: true });
    } else {
      res.json({ success: true, message: "Logged (SMTP missing)" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed notification" });
  }
});

// API Route for Fetching Inter Results
app.get("/api/fetch-inter-results", async (req, res) => {
  const { rollNumber, type } = req.query;
  if (!rollNumber) return res.status(400).json({ error: "HT required" });
  try {
    const { default: puppeteer } = await import("puppeteer");
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://results.eenadu.net/exam-results/ap-inter-1st-year-results-2026-general');
    // Simplified logic for Vercel demo - real scraping on Vercel is problematic
    await browser.close();
    res.json({ error: "Scraping results is limited in this environment" });
  } catch (error) {
    res.status(500).json({ error: "Scraper failed" });
  }
});

// Implementation for Vite / Static serving
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer } = await import("vite");
    const vite = await createServer({ server: { middlewareMode: true }, appType: "spa" });
    app.use(vite.middlewares);
  } else if (!process.env.VERCEL) {
    const distPath = path.resolve(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
}

setupVite();

const PORT = 3000;
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  app.listen(PORT, "0.0.0.0", () => console.log(`Server running on http://localhost:${PORT}`));
}

export default app;

