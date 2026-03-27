import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cors from "cors";
import multer from "multer";
import nodemailer from "nodemailer";
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
      // NOTE: User must set these environment variables in AI Studio Settings
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
            
            <p style="margin-bottom: 25px;">Please review the attached file and take action below:</p>
            
            <div style="display: flex; gap: 15px; margin-bottom: 30px;">
              <a href="${approveUrl}" style="background: #10b981; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; margin-right: 10px;">Accept & Upgrade</a>
              <a href="${rejectUrl}" style="background: #ef4444; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">Reject Request</a>
            </div>
            
            <div style="border-top: 1px solid #f3f4f6; padding-top: 20px; margin-top: 20px;">
              <p style="font-size: 14px;">Alternatively, you can manage all requests in the <a href="${adminUrl}" style="color: #4f46e5; font-weight: bold;">Admin Panel</a>.</p>
            </div>
            
            <p style="margin-top: 30px; font-size: 11px; color: #9ca3af; text-align: center;">
              Note: You must be logged in as an admin (ravurukarthik740@gmail.com) for these links to work.
            </p>
          </div>
        `,
        attachments: [
          {
            filename: file.originalname,
            content: file.buffer,
          },
        ],
      };

      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ravurukarthik740@gmail.com for user ${userEmail}`);
        res.json({ success: true, message: "Notification sent successfully" });
      } else {
        console.warn("SMTP credentials not configured. Skipping email send.");
        res.json({ 
          success: true, 
          message: "Notification logged (SMTP not configured). Please set SMTP_USER and SMTP_PASS in settings." 
        });
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      res.status(500).json({ error: "Failed to send notification" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
