const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const createError = require('http-errors')
require('dotenv').config()
require('./helpers/mongodb.helper')

const app = express()

const PORT = 5000 || process.env.PORT

// Routes
const userRoutes = require('./routes/User.routes')

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors())

app.use('/api/v1/users', userRoutes)

app.use(async (req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}...`)
})


module.exports = app