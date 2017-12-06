require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT

// App
const express = require('express')
const app = express()

// Routes
const routes = require('./routes')

app.use(cors())
app.use('/api', routes)

app.listen(PORT, () => {
	console.log(`API listening on port ${PORT}`)
})
