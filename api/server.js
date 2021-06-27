const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const dotenv = require('dotenv')
const cors = require('cors');
const mongoose = require('mongoose');
const registrationRoutes = require('./route');

dotenv.config()


mongoose.connect(process.env.DB, () =>console.log("Database connected"))

app.use(express.json())
app.use(cors())
app.use("./schema/User", registrationRoutes);
app.listen(4000, () => console.log("server is up and running"))

module.exports = app