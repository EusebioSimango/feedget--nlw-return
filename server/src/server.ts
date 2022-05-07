import express from 'express'
const PORT = 3333

const app = express()

app.get('/users', (req, res) => {
	return res.send('Hello, World!')
})

app.listen(PORT, () => {
	console.log("Server running at 'http://localhost:" + PORT + "'")
})