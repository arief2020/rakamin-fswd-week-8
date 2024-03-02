const express = require('express');
const Category = require('../contoller/categoryController');
const Actor = require('../contoller/actorController');

const router = express.Router()

router.get('/', Actor.getAll)
router.get('/:id', Actor.getActorById)


module.exports = router