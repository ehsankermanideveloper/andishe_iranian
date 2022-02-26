const mongoose = require('mongoose');

const Comment = mongoose.Schema({
    username : {
        type : String , required : true,
    },
    body : {
        type : String , required: true
    },
    status : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('Comments' , Comment);