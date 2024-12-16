const express = require("express");
const router = express.Router();

const { createCard } = require("../Controller/createCard.js");
const { getCards,getCardById } = require("../Controller/getCards.js");
const { updateCard} = require("../Controller/updateCards.js");
const { deleteCard} = require("../Controller/deleteCard.js");

router.post("/createCard", createCard);
router.get("/getCards", getCards);
router.get("/getCard/:id", getCardById);
router.put("/updateCard/:id", updateCard);
router.delete("/deleteCard/:id", deleteCard);

module.exports = router;