const mongoose = require('mongoose')

const todoSchema  = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true,
        enum: ['completed', 'uncompleted']
    }
},
{timestamps : true}
)

module.exports = mongoose.model("Todo", todoSchema)