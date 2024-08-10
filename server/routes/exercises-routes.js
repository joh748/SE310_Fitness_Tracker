// The routes for exercises

const express = require('express')

const exercisesController = require('../controllers/exercises-controller')

const router = express.Router()

// Get all exercises
router.get('/all', exercisesController.exercisesAll)

// Get exercise by name
router.get('/:name', exercisesController.exerciseByName)

module.exports = router;