const express = require('express')
const Film = require('../contoller/filmController')

const router = express.Router()

router.get('/', Film.getAll)
router.get('/:id', Film.getFilmById)
router.get('/:id/category', Film.getFilmByCategoryId)


module.exports = router