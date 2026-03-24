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

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: "ravurukarthik740@gmail.com",
        subject: `New Payment Proof Submission - ${userEmail}`,
        text: `
          A new payment proof has been submitted for review.
          
          User Email: ${userEmail}
          User ID: ${userId}
          Payment Date: ${paymentDate}
          
          Please review the attached file.
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
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
