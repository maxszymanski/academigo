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
			html: `<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 40px; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
    <h2 style="text-align: center; color: #2c3e50;">Nowa wiadomość z formularza kontaktowego</h2>
    <p style="font-size: 16px; line-height: 1.6;">
      <strong>Imię:</strong><br>
      <span style="color: #1d3557;">${name}</span>
    </p>
    <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
      <strong>Wiadomość:</strong><br>
      ${message}
    </p>
    <p style="font-size: 14px; color: #666; margin-top: 30px;">
      Wiadomość została przesłana przez formularz kontaktowy na stronie.
    </p>
  </div>
</div>`,
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
			subject: `Usuwanie konta ${email}`,
			text: `Proszę  o usunięcie mojego konta o podanym adresie email `,
			html: `<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 40px; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
    <h2 style="text-align: center; color: #e63946;">Prośba o usunięcie konta</h2>
    <p style="font-size: 16px; line-height: 1.6;">
      Użytkownik przesłał prośbę o usunięcie konta powiązanego z adresem e-mail:
    </p>
    <p style="font-size: 16px; font-weight: bold; color: #1d3557; margin: 20px 0;">
      📧 ${email}
    </p>
    <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
      Treść wiadomości:<br>
      <em>Proszę o usunięcie mojego konta o podanym adresie e-mail.</em>
    </p>
  </div>
</div>`,
		})

		return { status: 'success' }
	} catch (error) {
		console.log(error)
		return { status: 'error' }
	}
}
