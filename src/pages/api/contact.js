import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: 'asamy7256@gmail.com',
      replyTo: email,
      subject: `📩 New Message from ${name} — Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #04060e; color: #e0e8ff; padding: 32px; border-radius: 16px; border: 1px solid rgba(0,240,255,0.2);">
          <h2 style="color: #00f0ff; font-size: 22px; margin-bottom: 24px;">📩 New Portfolio Message</h2>
          <div style="background: rgba(0,240,255,0.05); border: 1px solid rgba(0,240,255,0.15); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
            <p style="color: #94a3b8; font-size: 12px; margin-bottom: 4px; letter-spacing: 2px; text-transform: uppercase;">From</p>
            <p style="color: #e0e8ff; font-size: 16px; font-weight: bold;">${name}</p>
          </div>
          <div style="background: rgba(0,240,255,0.05); border: 1px solid rgba(0,240,255,0.15); border-radius: 12px; padding: 20px; margin-bottom: 16px;">
            <p style="color: #94a3b8; font-size: 12px; margin-bottom: 4px; letter-spacing: 2px; text-transform: uppercase;">Email</p>
            <p style="color: #00f0ff; font-size: 15px;">${email}</p>
          </div>
          <div style="background: rgba(0,240,255,0.05); border: 1px solid rgba(0,240,255,0.15); border-radius: 12px; padding: 20px;">
            <p style="color: #94a3b8; font-size: 12px; margin-bottom: 8px; letter-spacing: 2px; text-transform: uppercase;">Message</p>
            <p style="color: #e0e8ff; font-size: 15px; line-height: 1.7;">${message}</p>
          </div>
          <p style="color: #334155; font-size: 11px; margin-top: 24px; text-align: center;">Sent from Ahmed Samy El-Sanhory Portfolio</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ message: 'Failed to send email. Please try WhatsApp.' });
  }
}
