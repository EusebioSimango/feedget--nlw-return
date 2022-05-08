import express from 'express'
const PORT = 3333

const app = express()

app.use(express.json())

app.post('/feedbacks', (req, res) => {
	console.log(req.body)

	return res.send('Hello, World!')
})

app.get('/users', (req, res) => {
	return res.send('Hello, World!')
})



app.listen(PORT, () => {
	console.log("Server running at 'http://localhost:" + PORT + "'")
})