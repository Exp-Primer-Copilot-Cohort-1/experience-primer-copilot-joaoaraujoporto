// Create web server
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Create a new express application
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Create a new comment
app.post('/comments', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your comment was submitted successfully!`
  })
})

// Start the server
app.listen(process.env.PORT || 8081)