const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
    },
    _id:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

});

module.exports = mongoose.model('card' , cardSchema);