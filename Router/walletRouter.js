const express = require("express")
const { addMoney, sendMoney, transactions } = require('../Controllers/walletController');
const project = require('../middleware/authMiddleware')


const router = express.Router()


router.post('/add-money', protect, addMoney)
router.post('/send', protect, sendMoney)
router.get("/transaction", protect, transactions)

module.exports = router;

//this is mine