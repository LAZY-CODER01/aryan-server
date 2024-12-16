const express = require('express');
const app = express();
const dbconnect = require('./config/database');
require('dotenv').config();
const cardRoutes = require("./routes/cardCRUD");


const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 



app.use("/api/v1", cardRoutes);



app.listen(PORT , ()=>{
    console.log(`server started at port no. ${PORT}`);
});

dbconnect();

// app.get('/',(req , res)=>{
//     res.send('hello A.P Singh')
// });