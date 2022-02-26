const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const Privacy = mongoose.Schema({
    title : {type : String , required : true},
    descripcion : { type : String , required : true},
    language :  {type : Schema.Types.ObjectId , ref : 'languages'}
})

module.exports = mongoose.model('Privacys' ,Privacy )