const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const cors = require('cors');

const corsOptions = {
    origin: ['http://localhost:3000', 'https://aryan-card.vercel.app'], // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If you need cookies
};

app.use(cors(corsOptions));

const dbconnect = require('./config/database');
require('dotenv').config();
const cardRoutes = require("./routes/cardCRUD");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", cardRoutes);

app.use('/', (req, res) => {
    res.send('Welcome to the API');
});

dbconnect();

module.exports = app; // Export the app for Vercel
