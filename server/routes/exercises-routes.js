// The routes for exercises

const express = require('express')

const exercisesController = require('../controllers/exercises-controller')

const router = express.Router()

// Get all exercises
router.get('/all', exercisesController.exercisesAll)

// Get exercise by name, date and set
router.get('/:name/:date/:set', exercisesController.exerciseByNameDateAndSets)

//Create a new exercise
router.post('/create/:name/:muscleGroup', exercisesController.createExercise)

//Log a set


module.exports = router;