const { trusted } = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    age : Number,
    marks: Number,
    city: String,
    subjects: [String]
})

module.exports = mongoose.model('Student', studentSchema)