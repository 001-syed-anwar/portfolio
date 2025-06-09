import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { email, message, name } = await req.json()

    if (!email || !message || !name) {
        return NextResponse.json({ error: "Invalid input" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
        },
    })

    try {
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            subject: `New message from ${email} (${name}) in Portfolio`,
            text: message,
            replyTo: email,
        })

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error("Email error:", err)
        return NextResponse.json({ error: "Email failed" }, { status: 500 })
    }
}
