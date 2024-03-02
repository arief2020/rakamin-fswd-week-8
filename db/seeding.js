const fs = require('fs')
const pool = require('../query')
const seedQuery = fs.readFileSync('db/seeding.sql', {encoding: 'utf-8'})
pool.query(seedQuery, (err, res) => {
    console.log(err, res)
    console.log('Seeding Completed!')
    pool.end()
})