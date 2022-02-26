const mongoose = require('mongoose');
const {Schema} = require('mongoose')
const Category = mongoose.Schema({
    title : {
        type : String ,
        required : true
    },
    language : {
        type : Schema.Types.ObjectId,
        ref : 'Languages'
    }
} , {
    toJson : true,
    toVirtuals : true

})
module.exports = mongoose.model('Categorys' , Category)