
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const userRouter = require('../Router/userRouter')
const walletRouter = require('./Router/walletRouter')


const connectDB = require("./config/db")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/users", userROuter);
app.use("/apiwallet", walletRouter);



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => consolelog('server is running on port ${port}'))

//this is mine