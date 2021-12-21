const { getAllusers, registerUser } = require('../controllers/User.controllers')

const router = require('express').Router()

router.get('/', getAllusers)

router.post('/register', registerUser)

module.exports = router