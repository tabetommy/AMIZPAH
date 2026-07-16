// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json()
        console.log('Received contact form submission:', { name, email, subject, message }) // Log the received data

        // 1. Configure the SMTP transporter for Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: "",
                clientId:"" ,
                clientSecret: "",
                refreshToken: "",
            },
        })

        // 2. Format the email content
        const mailOptions = {
            from: "",
            to: "", // Sends the contact form message back to your inbox
            replyTo: email,             // Clicking "Reply" in Gmail will message the user directly
            subject: `New Microfinance Inquiry: ${subject}`,
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
                        <td style="padding: 6px 0; font-size: 14px; color: #0f172a; font-weight: 600;">${name}</td>
                        </tr>
                        <tr>
                        <td style="padding: 6px 0; font-size: 14px; color: #64748b; font-weight: 500;">Email:</td>
                        <td style="padding: 6px 0; font-size: 14px; color: #0f766e; font-weight: 600;">
                            <a href="mailto:${email}" style="color: #0f766e; text-decoration: underline;">${email}</a>
                        </td>
                        </tr>
                        <tr>
                        <td style="padding: 6px 0; font-size: 14px; color: #64748b; font-weight: 500;">Subject:</td>
                        <td style="padding: 6px 0; font-size: 14px; color: #0f172a; font-weight: 500;">${subject}</td>
                        </tr>
                    </table>
                    </div>

                    <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                    <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Message</h3>
                    <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</p>
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