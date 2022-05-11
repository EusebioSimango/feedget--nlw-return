import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedback-repository'
export const routes = express.Router()

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "1f2bcd96311883",
		pass: "9d3e8888cb04ab"
	}
})

routes.post('/feedbacks', async (req, res) => {
	
	const { type, comment, screenshot } = req.body

	const prismaFeedbackRepository = new PrismaFeedbackRepository()
	const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository)

	await submitFeedbackUseCase.execute({
		type,
		comment,
		screenshot,
	})

	// await transport.sendMail({
	// 	from: 'Equipa Feedget <io@feedget.com>',
	// 	to: 'Eusebio Simango <eusebiosimango14@gmal.com>',
	// 	subject: 'Novo Feedbck',
	// 	html: [
	// 		`<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
	// 		`<p>Tipo dtransporto feedback: ${type}</p>`,
	// 		`<p>Comentário: ${comment}</p>`,
	// 		`</div>`,
	// 	].join('\n')
	// })

	return res.status(201).send()
})