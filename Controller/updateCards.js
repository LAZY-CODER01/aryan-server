const Card = require("../models/card");

exports.updateCard = async (req, res) => {
    try {
        const { id } = req.params;
        let { title, price, imageUrl } = req.body;

        if (!title && !price && !imageUrl) {
            return res.status(400).json({
                success: false,
                message: "Please provide at least one field to update.",
            });
        }

        const temp = await Card.findById(id);
        if (!temp) {
            return res.status(404).json({
                success: false,
                message: "Card not found.",
            });
        }

        title = title || temp.title;
        price = price || temp.price;
        imageUrl = imageUrl || temp.imageUrl;

        const updatedCard = await Card.findByIdAndUpdate(
            id,
            { title, price, imageUrl },
            { new: true }
        );

        res.status(200).json({
            success: true,
            data: updatedCard,
            message: "Updated successfully",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error not updated",
        });
    }
};
