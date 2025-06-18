import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASSWORD,
    },
  });

  // HTML email template
  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Message - PY Yoga</title>
      <style>
        /* Basic styling for email clients */
        body {
          font-family: sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-top: 4px solid #4CAF50; /* Example green accent line */
        }
        .header {
          border-bottom: 1px solid #eee;
          padding-bottom: 15px;
          margin-bottom: 15px;
        }
        .header h2 {
          margin: 0;
          color: #388E3C; /* Darker green */
        }
        .content p {
          margin-bottom: 10px;
        }
        .content strong {
            color: #333;
        }
        .message-block {
          background-color: #e8f5e9; /* Light green background */
          padding: 15px;
          border-left: 4px solid #81C784; /* Medium green border */
          margin-top: 15px;
          white-space: pre-wrap; /* Preserve line breaks */
          word-wrap: break-word; /* Break long words */
        }
        .footer {
          margin-top: 20px;
          border-top: 1px solid #eee;
          padding-top: 15px;
          font-size: 0.9em;
          color: #777;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Message from PA Yoga</h2>
          <p>Received a new message from your website contact form.</p>
        </div>
        <div class="content">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div class="message-block">
            ${message}
          </div>
        </div>
        <div class="footer">
          <p>&copy; PY Yoga. This is an automated message.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailMessage = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: `New Contact Message from ${name}`,
    html: htmlTemplate,
  };

  try {
    await transporter.sendMail(mailMessage);
    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email." },
      { status: 500 }
    );
  }
}
