const express = require('express');
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

// Import routes
const workoutsRouter = require('./routes/workouts-routes')

// Set default port for express app
const PORT = 4001

// Create express app
const app = express()

// Apply middleware
// Note: Keep this at the top, above routes
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Implement books route
app.use('/workouts', workoutsRouter)

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, function() {
    console.log(`Server is running on: ${PORT}`)
  })