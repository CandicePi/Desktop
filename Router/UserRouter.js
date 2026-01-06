const express = require("express")
const { register, login, gerBalance } = require('../Controllers/userController')
const protect = require('../middleware/authMiddleware');

const router = express.Router()

router.post('/login', login)

router.post('/signup',register)

router.get('/balance',protect,getBalance)

module.exports = router

//this is mine