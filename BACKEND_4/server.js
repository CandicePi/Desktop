const express = require('express')
const app = express()


app.use(express.json())

//make a function
function logger(req, next) {
    console.log("Hello fired before the endpoint")
    next()
}


app.use(logger)


//Home route
app.get('/',(req, res) => {
    console.log("after logger")
    res.status(200).json({
        message: 'In the homepage'
    })
})



app.listen(3000,() => console.log('server running on the port 3000'))