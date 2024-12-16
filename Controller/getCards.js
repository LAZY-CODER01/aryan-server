const Card = require("../models/card");


exports.getCards = async (req, res) => {
  try {
    const cards = await Card.find({});

    res.status(200).json({
      success: true,
      data: cards,
      message: "Entire Card Data are Fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

exports.getCardById = async (req, res) => {
  try {
    const id = req.params.id;
    const card = await Card.findById({ _id: id });

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "No Data Found with Given card Id",
      });
    }
    res.status(200).json({
      success: true,
      data: card,
      message: "Success",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
