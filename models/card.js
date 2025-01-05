// const mongoose = require('mongoose');

// const cardSchema = new mongoose.Schema({

//     title:{
//         type:String,
//         required:true
//     },
//     imageUrl:{
//         type:String,
//     },
//     _id:{
//         type:String,
//         required:true
//     },
//     price:{
//         type:Number,
//         required:true
//     }

// });

// module.exports = mongoose.model('card' , cardSchema);



const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: String, required: true },
    imageUrl: { type: String },
});

module.exports = mongoose.model("Card", cardSchema);
