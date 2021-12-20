const express = require('express')
const app = express()

// const morgan = require('morgan')
// const cors = require('cors')

const PORT = 5000 || process.env.PORT

app.get('/', (req, res, next) => {
    res.send('Multivendor Ecommerce application')
})

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}...`)
})


module.exports = app