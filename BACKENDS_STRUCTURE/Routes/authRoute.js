const express = require('express')
const router = express.Router()
const {registerUser, login, getProfile } = require('../Controllers/authController')


router.post('auth/register', registerUser)

router.post('/login', login)

router.get('/profile', getProfile)

module.exports = router