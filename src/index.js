require('dotenv').config({ override: true })

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongo = require('./utils/mongo')

mongo.connect()

const app = express()
const port = 3000

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const routes = require('./api/routes')
app.use('/api', routes)

app.listen(port, () => {
	console.log(`listening at localhost:${port}`)
})
