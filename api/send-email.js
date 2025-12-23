import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        // Create a transporter using environment variables
        // These must be set in the Vercel Dashboard
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com', // Default to Gmail/Universal
            port: parseInt(process.env.EMAIL_PORT || '587'),
            secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`, // Send FROM yourself (to avoid spam blocking) but with user's name
            replyTo: email, // Reply to the user
            to: process.env.EMAIL_TO || process.env.EMAIL_USER, // Send TO yourself
            subject: `Website Inquiry: ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}
            `,
            html: `
<h3>New Website Inquiry</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email send error:', error);
        return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
}
