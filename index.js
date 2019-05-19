const express = require('express');
const app = express();
const keys = require('./config/keys');
const mongoose = require('mongoose');

mongoose.connect(keys.mongoURI);
const PORT = process.env.PORT || 4000;
app.listen(PORT);
