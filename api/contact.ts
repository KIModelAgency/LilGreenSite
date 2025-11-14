// api/contact.ts (root, nicht in src)
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Missing fields' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,       // smtp.strato.de
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,                     // wichtig! Strato nutzt STARTTLS, nicht SSL
      auth: {
        user: process.env.SMTP_USER,     // info@lilgreen.de
        pass: process.env.SMTP_PASS      // dein Passwort
      }
    });

    await transporter.sendMail({
      from: `"Lil Green Kitchen" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,         // Mail an dich selbst
      replyTo: email,
      subject: subject || 'Neue Kontaktanfrage über lilgreen.de',
      text: `
Name: ${name}
E-Mail: ${email}
Nachricht:
${message}
      `,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject || '-'}</p>
        <p><strong>Nachricht:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    return res.status(200).json({ success: true, message: 'Mail sent' });
  } catch (err: any) {
    console.error('Mail error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}
