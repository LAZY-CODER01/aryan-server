

const Card = require("../models/card");
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

exports.createCard = async (req, res) => {
    try {
        const { title,  price,  imageUrl } = req.body;

        if (!title || !price) {
            return res.status(400).json({
                success: false,
                message: "Please provide the required fields: title and price.",
            });
        }

        const newCard = await Card.create({ title, price, imageUrl });
        res.status(200).json({
            success: true,
            data: newCard,
            message: "Entry Created Successfully",
        });
    } catch (err) {
        console.error("Error creating card:", err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error: " + err.message,
        });
    }
};
