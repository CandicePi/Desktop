const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true
    },
    email: {
        type:string,
        required: true
    },
    password: {
        type: string,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    }
},{timestamps: true})

UserSchema.pre("save",async function (){
    if(!this.isModified("password"))return ;

    const salt = await bcrypt.genSalt(10)
    this.password = bcrypt.hash(this.password,salt)
})


UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.Password)
}

module.exports = mongoose.model("User", UserSchema);

//this is mine