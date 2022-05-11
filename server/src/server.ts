import express from 'express'
import { prisma } from './prisma'
import nodemailer from 'nodemailer'

const PORT = 3333
// import cors from 'cors'
const app = express()

// app.use(cors())

app.use(express.json())

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "1f2bcd96311883",
		pass: "9d3e8888cb04ab"
	}
})

app.post('/feedbacks', async (req, res) => {
	const { type, comment, screenshot } = req.body

	const feedback = await prisma.feedback.create({
		data: {
			type,
			comment,
			screenshot
		} 
	})

	await transport.sendMail({
		from: 'Equipa Feedget <io@feedget.com>',
		to: 'Eusebio Simango <eusebiosimango14@gmal.com>',
		subject: 'Novo Feedbck',
		html: [
			`<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
			`<p>Tipo dtransporto feedback: ${type}</p>`,
			`<p>Comentário: ${comment}</p>`,
			`</div>`,
		].join('\n')
	})

	return res.status(201).json({ data: feedback })
})

app.get('/users', (req, res) => {
	return res.send('Hello, World!')
})



app.listen(PORT, () => {
	console.log("Server running at 'http://localhost:" + PORT + "'")
})