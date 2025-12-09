const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express()

app.use(express.json())

const users = []
const notes = []



app.post('/signup',async(req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        res.statusCode(400).json({
            message:"Data missing"
        })
    }

    let hashedPassword = await bcrypt.hash(password,10)


    user.push({id: uuidv4, name, email,password: hashedPassword})

    res.status(201).json({
        message:'user registered succesfully'
    })
})


app.post('/Login', (req,res) =>{
    const{name, email, passowrd} = req.body;

   if(!name || !email !password) {
    return res.status(400).json({
        message:"Data missing"
    })
   }

})

const user = user.find(undefined.email ===email)

if(!user) {
    retun res.status(404).json({
        message:"User not found"
    })
}

const validPassword = await bcrypt.compare(password, user.password)

if(user.password != password) {
    return res.status(403).json({
        message:"User not found"
    })
}

const token = jwt.sign({email:user.email},"abc1234333", { expiresIn: '2m'})

res.status(200).json({
    message: 'login successful',
    token
})


app.get('/profile', (req, res) => {
    const authheader = req.headers['authorization']

    if(!token) {
        return res.status(403).json({
            message: "Acess denied"
        })
    }
}
    try{
    const decoded = jwt.verify(token,"abc1234333")
    res.status(200).json({
        user:decoded
    })

}
catch(e) {
    res.status(400).son({
        message: "Something went wrong or token expired"
    
    })
})

//We are making the JWT token  with user id (not with email)

//Get all notes
app.get('/notes',(req, res) =>{
    const token = req.headers['authorization']
})

//Add new note
app.post('/notes', (req, res) =>{
    const {text } =req.body
    if(!text) return res.status(400).json({message: "Note text required"});

    const note = {id: uuidv4(), userId: decoded, id, text}

    notes.push(note)

    res.json({
        message: "note added"
    })
})
//delete a note

//H/W updating a note







app.listen(3000,() => {
    console.log('Server is running on http://localhost:3000')
})