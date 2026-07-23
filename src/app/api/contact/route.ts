// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from "zod"
import escape from "escape-html"

export async function POST(request: Request) {
    try {
        const ContactSchema = z.object({
            name: z.string().trim().min(2).max(100),
            email: z.string().trim().email().max(254),
            subject: z.string().trim().min(3).max(150),
            message: z.string().trim().min(2).max(3000),
        });

        const result = ContactSchema.safeParse(await request.json());
        if (!result.success) {
            console.error(result.error.issues);
            return NextResponse.json(
                { error: "Invalid form data." },
                { status: 400 }
            );
        }
        const { name, email, subject, message } = result.data;

        const safeName = escape(name);
        const safeEmail = escape(email);
        const safeSubject = escape(subject);
        const safeMessage = escape(message);

        // 1. Configure the SMTP transporter for Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.GMAIL_USER,
                clientId: process.env.GMAIL_CLIENT_ID,
                clientSecret: process.env.GMAIL_CLIENT_SECRET,
                refreshToken: process.env.GMAIL_REFRESH_TOKEN,
            },
        })

        // 2. Format the email content
        const mailOptions = {
            from: "Damizpah Microcredit <" + process.env.GMAIL_USER + ">",
            to: process.env.GMAIL_USER,
            replyTo: email,
            subject: `New Inquiry: ${subject}`,
            html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #f8fafc; color: #1e293b;">
                    <div style="border-bottom: 2px solid #0f766e; padding-bottom: 16px; margin-bottom: 24px;">
                    <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #0f766e;">New Contact Inquiry</h2>
                    <p style="margin: 4px 0 0 0; font-size: 14px; color: #64748b;">Submitted via your website contact form</p>
                    </div>

                    <div style="margin-bottom: 24px;">
                    <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">Sender Information</h3>

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                        <td style="padding: 6px 0; font-size: 14px; color: #64748b; width: 100px; font-weight: 500;">Name:</td>
                        <td style="padding: 6px 0; font-size: 14px; color: #0f172a; font-weight: 600;">${safeName}</td>
                        </tr>
                        <tr>
                        <td style="padding: 6px 0; font-size: 14px; color: #64748b; font-weight: 500;">Email:</td>
                        <td style="padding: 6px 0; font-size: 14px; color: #0f766e; font-weight: 600;">
                            <a href="mailto:${safeEmail}" style="color: #0f766e; text-decoration: underline;">${safeEmail}</a>
                        </td>
                        </tr>
                        <tr>
                        <td style="padding: 6px 0; font-size: 14px; color: #64748b; font-weight: 500;">Subject:</td>
                        <td style="padding: 6px 0; font-size: 14px; color: #0f172a; font-weight: 500;">${safeSubject}</td>
                        </tr>
                    </table>
                    </div>

                    <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                    <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Message</h3>
                    <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${safeMessage}</p>
                    </div>

                    <div style="text-align: center; border-t: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #94a3b8;">
                    <p style="margin: 0 0 4px 0;">This is an automated operational notification.</p>
                    <p style="margin: 0;">To reply to the sender, simply hit <strong>Reply</strong> in your mail application.</p>
                    </div>
                </div>
                `
        }

        // 3. Send the email
        await transporter.sendMail(mailOptions)

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 })
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
    }
}