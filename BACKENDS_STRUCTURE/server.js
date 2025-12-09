const express = require('express')
const authRoutes = require('./Routes/authRoutes')
const admissionRoutes = require ('../Routes/admissionRoute')

const app = express()


app.use(express.json())

app.use('/api/v1/auth', authRoutes)

app.use('/api/v1/admission',admissionRoutes)

app.listen(3000, () => console.log('Server running on port 3000'))