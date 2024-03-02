const express = require('express');
const Category = require('../contoller/categoryController');

const router = express.Router()

router.get('/', Category.getAll)
router.get('/:id', Category.getCategoryById)


module.exports = router