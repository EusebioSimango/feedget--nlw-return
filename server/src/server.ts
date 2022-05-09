import express from 'express'
import { prisma } from './prisma'
const PORT = 3333

const app = express()

app.use(express.json())

app.post('/feedbacks', (req, res) => {
	prisma.feedback.create({
		data: {
			type: req.body.type,
			comment: req.body.comment,
			screenshot: req.body.screenshot
		}
	})

	return res.send('Hello, World!')
})

app.get('/users', (req, res) => {
	return res.send('Hello, World!')
})



app.listen(PORT, () => {
	console.log("Server running at 'http://localhost:" + PORT + "'")
})