// Import database
const knex = require('./../db')

// Retrieve all workouts
const workoutsAll = (req, res) => {
  // Get all workouts from database
  knex
    .select('*') // select all records
    .from('workouts') // from 'workouts' table
    .then(userData => {
      // Send books extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving workouts: ${err}` })
    })
}

module.exports = {
    workoutsAll,
};