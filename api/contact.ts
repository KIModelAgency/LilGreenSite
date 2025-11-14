// api/contact.ts (Projekt-Root, nicht in /src)
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body as {
      name: string;
      email: string;
      subject?: string;
      message: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ success: false, message: 'Missing fields.' });
    }

    const mailSubject =
      subject && subject.trim()
        ? `[Kontaktformular] ${subject.trim()}`
        : 'Neue Kontaktanfrage über lilgreen.de';

    const to = process.env.CONTACT_TO || 'info@lilgreen.de';
    const from = process.env.CONTACT_FROM || 'Lil Green Kitchen <no-reply@lilgreen.de>';

    await resend.emails.send({
      from,                // Absender (Domain muss in Resend verifiziert sein)
      to,                  // Empfänger
      reply_to: email,     // Antworten gehen an den Absender aus dem Formular
      subject: mailSubject,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject || '-'}</p>
        <p><strong>Nachricht:</strong><br>${(message || '').replace(/\n/g, '<br>')}</p>
      `,
      text: `Name: ${name}
E-Mail: ${email}
Betreff: ${subject || '-'}
Nachricht:
${message || ''}`,
    });

    return res.status(200).json({ success: true, message: 'Mail sent', id: 'ok' });
  } catch (err: any) {
    console.error('Kontakt-Fehler:', err);
    return res.status(500).json({ success: false, message: err?.message || 'Fehler beim Mailversand' });
  }
}
