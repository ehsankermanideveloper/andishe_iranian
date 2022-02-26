const mongoose = require('mongoose');

const Article = mongoose.Schema({
    title : {type : String , required : true},
    slug : {
        type : String , required: true
    },
    titleImage : {
        type : String , required : true
    },
    body : {
        type : String , required : true
    },
    discreption : {
        type : String , required : true
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    },
    views : {
        type : Number , default : 0
    },
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Comments'
    }],
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Categorys'
    }
})

module.exports = mongoose.model('Articles' , Article);