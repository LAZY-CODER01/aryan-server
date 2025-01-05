const Card = require("../models/card");


exports.deleteCard = async (req, res) => {
    try {
        const {id} = req.params;
        await Card.findByIdAndDelete(id);
        
        res.json({
            success: true,
            message : "Card deleted successfully"
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error card not deleted",
          });
    }
}