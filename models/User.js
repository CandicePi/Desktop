const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema  = new mongoose.Schema(
    {
        name: {
            type:String,
            required: true
        },
        email:{
            type: String,
            required: true,
        },
        password: {
            type:String,
            required: true
        }
    },
    {timestamp: true}
);

//for password
userSchema.pre('save', async function (next){
    if (!this.isModified('password')) return ;

    const salt = await bcrypt.genSalt(10)
    this.password = bcrypt.hash(this.password,salt)

})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('user', userSchema);