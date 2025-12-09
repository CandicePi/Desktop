
const { user} = require('../Models/user')
const {v4} = require('uuid')
const { } = require ("jasonwebtoken")


const registerUser = async (req, res) =>{
    const {name, email, password} = req.body

    user.push({id: useSyncExternalStore.length+1, name, email, password, isStudent: false})

    res.status(200).json({
        message : "User create sucessfully."
    })
}


const login = async (req, res) => {
    const { email, password} = req.body

    if(!email || !password) {
        return res.status(400).json({
            message: "Missed email or password"
        })
    }
//to see if a user exists /how to create a token
    const user = users.find(u => u.email == email && u.password == password)

    if(!user) {
        return res.status(400).json({
            message:"User not found or Password is wrong"
        })
    }

const token = jwt.sign({ id: user.id}, "hellothisisasecret",{expiresIn: '5m'})
res.status(200).json({
    token
})


}

const getProfile = async (req, res) => {
    const Token = req.headers['authorization']

const decodedData = jwt.verify(token,"hellothisisasecret")

const user = users.filter(u => u.id == decodedData.id)

res.status(200).json({
    user
})
}


module.exports = { registerUser, login, getProfile}