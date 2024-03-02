const express = require('express')

const router = express.Router()

const categoryRouter = require('./category')
const filmRouter = require('./film')
const actorRouter = require('./actor')

router.use('/api/film', filmRouter)
router.use('/api/category', categoryRouter)
router.use('/api/actor', actorRouter)


module.exports = router