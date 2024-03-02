const express = require('express')
const dotenv = require('dotenv')

const app = express()
const router = require('./router/route')
const pool = require('./query')

dotenv.config()

const port = process.env.URL_PORT || 5000
app.use(router)
pool.connect((err, res) => {
    console.log('Database Connected')
})

app.listen(port, ()=>{
    console.log('backend run in port 5000')
})