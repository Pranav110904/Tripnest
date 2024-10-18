const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const connectDB = require('./config/database');

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.get('/', (req,res) => {
    res.send("Backend is up and running!");
})

const PORT = process.env.PORT;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});
