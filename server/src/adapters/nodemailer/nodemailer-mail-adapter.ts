import { MailAdapter, sendMailData } from '../mail-adapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "1f2bcd96311883",
		pass: "9d3e8888cb04ab"
	}
})

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: sendMailData){
	await transport.sendMail({
		from: 'Equipa Feedget <io@feedget.com>',
		to: 'Eusebio Simango <eusebiosimango14@gmal.com>',
		subject,
		html: body,
	})
	}
}