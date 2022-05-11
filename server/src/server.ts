import express from 'express'
import { prisma } from './prisma'
import nodemailer from 'nodemailer'

const PORT = 3333
// import cors from 'cors'
const app = express()

// app.use(cors())

app.use(express.json())

app.post('/feedbacks', async (req, res) => {
	const { type, comment, screenshot } = req.body

	const feedback = await prisma.feedback.create({
		data: {
			type,
			comment,
			screenshot
		} 
	})

	return res.status(201).json({ data: feedback })
})

app.get('/users', (req, res) => {
	return res.send('Hello, World!')
})



app.listen(PORT, () => {
	console.log("Server running at 'http://localhost:" + PORT + "'")
})