const Card = require("../models/card");
const cloudinary = require('cloudinary').v2;
require('dotenv').config();



exports.createCard = async(req,res) => {
    try {
            const {title, _id , price , imageUrl} = req.body;
            if (!title || !_id || !price) {
                return res.status(400).json({
                    success: false,
                    message: 'Please provide the basic required fields: title, id and price.'
                });
            }
            const newCard = await Card.create({title,imageUrl,_id,price});
            res.status(200).json(
                {
                    success:true,
                    data:newCard,
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}