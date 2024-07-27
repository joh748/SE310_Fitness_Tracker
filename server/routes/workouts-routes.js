// The routes for workouts
// What are routes? Routes are used to determine the structure of the URL. 

const express = require('express')

const workoutsRoutes = require('../controllers/workouts-controller')

const router = express.Router()

router.get('/all', workoutsRoutes.workoutsAll)

module.exports = router;