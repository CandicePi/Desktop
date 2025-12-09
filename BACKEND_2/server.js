const express = require('express');
const app = express()
const PORT = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    console.log(req)
    res.send("This is a get request on /.")
})

app.post('/', (req, res) => {
    res.send(req.body)
    res.send({
        message:"Data recieved from frontend",
        body: req.body
    })

})

app.listen(PORT,() =>{
    console.log('Server is running on  http://localhost:${PORT}')
})

