// Import express
const express = require('express')
// Import workouts-controller
const workoutsRoutes = require('../controllers/workouts-controller')

// Create router
const router = express.Router()

router.get('/all', workoutsRoutes.workoutsAll)

// Export router
module.exports = router;