'use server'

import nodemailer from 'nodemailer'

export async function sendEmail(formData: FormData) {
	const name = formData.get('name')
	const email = formData.get('email')
	const message = formData.get('message')

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		secure: false,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	} as nodemailer.TransportOptions)

	try {
		await transporter.sendMail({
			from: `"${name}" <${email}>`,
			to: process.env.SMTP_USER,
			subject: `Nowa wiadomość z formularza kontaktowego od ${name}`,
			text: `Imię: ${name}\n${message}`,
			html: `<div style="padding: 20px;"><div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333;">
        <p><strong>Imię:</strong> ${name}</p>
        <p style="margin-top: 20px;"><strong>Wiadomość:</strong><br>${message}</p>
    </div></div>`,
		})

		return { status: 'success' }
	} catch (error) {
		console.log(error)
		return { status: 'error' }
	}
}
export async function deleteAcountEmail(formData: FormData) {
	const email = formData.get('email')

	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		secure: false,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	} as nodemailer.TransportOptions)

	try {
		await transporter.sendMail({
			from: `"${email}" <${email}>`,
			to: process.env.SMTP_USER,
			subject: `Usuwanięcie konta ${email}`,
			text: `Proszę  o usunięcie mojego konta o podanym adresie email `,
			html: `<div style="padding: 20px;"><div style="max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333;">
        <p><strong>Email:</strong> ${email}</p>
        <p style="margin-top: 20px;"><strong>Wiadomość:</strong><br>Proszę o usunięcie mojego konta o podanym adresie email. </p>
    </div></div>`,
		})

		return { status: 'success' }
	} catch (error) {
		console.log(error)
		return { status: 'error' }
	}
}
