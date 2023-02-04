const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 6,
        max: 15,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 6,
        max: 15,
    },
    status: {
        type: String,
        require: true,
        enum: ["student", "teacher"]
    }
},
{timestamps: true}
)

module.exports = mongoose.model("User", userSchema)