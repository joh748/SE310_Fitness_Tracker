// Import path module
const path = require('path')

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite')

// Create connection to SQLite database
const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true
})

// Create a table in the database called "workouts"
knex.schema
  // If there is already a table, work with it
  .hasTable('workouts')
    .then((exists) => {
      if (!exists) {
        // If no "workouts" table exists
        // create new, with "weight", "set", "rep",
        // and use "id" as a primary identification
        // and increment "id" with every new record (book)
        return knex.schema.createTable('workouts', (table)  => {
          table.increments('id').primary()
          table.float('weight')
          table.integer('set')
          table.integer('rep')
          table.string('name')
        })
        .then(() => {
          // Log success message
          console.log('Table \'Workouts\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
      }
    })
    .then(() => {
      // Log success message
      console.log('done')
    })
    .catch((error) => {
      console.error(`There was an error setting up the database: ${error}`)
    })

// Log all data in "workouts" table (for debugging)
knex.select('*').from('workouts')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Export the database
module.exports = knex