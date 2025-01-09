const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbconnect = require('./config/database');
const cardRoutes = require("./routes/cardCRUD");

const app = express();

// Configure CORS
const corsOptions = {
    origin: ['http://localhost:5173','http://localhost:3000' ,'https://aryan-card.vercel.app'], // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If you need cookies
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", cardRoutes);

app.use('/', (req, res) => {
    res.send('Welcome to the API');
});

// Database connection
dbconnect();

// Export app for Vercel
module.exports = app;
