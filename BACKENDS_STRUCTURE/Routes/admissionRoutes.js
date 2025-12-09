const express = require('express')
const router = express.Router()
const { admitStudent}  = require('../Controller/admissionController')
const authMiddleware = require('../Middleware')

router.post('/admitStudent', admitStudent)

module.exports = router