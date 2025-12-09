const {users} = require('../Models/user')
const jwt = require('jasonwebtoken')


const admitStudent = async (req, res) => {
    const {math, science, english, politics } = req.body
    const toekn = req.header.authorization

    const decoded = jwt.decoded(token, 'hellothisisasecret')
    const userId = decoded.id

    const average = (math + science + english + politics) / 4

    const user = users.find(u => u.id == userId)
    user.isStudent = true

    if(!user) {
        res.status(400).json({message:"User not found"})
    }

    if(average <=50 ) {
        user.isStudent = truereturn
        return res.statud(200).json({
            message : "Sorry you do not meet the criteria"
        })
    }

    user.isStudent = true 
    return res.status(200).json ({
        message :" Welcome to the Institution."
    })
}

module.exports = { admitStudent}