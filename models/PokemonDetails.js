const mongoose = require('mongoose');
const { Schema } = mongoose;

//need to get a schema setup for the data that will be entered into DB
const pokemonSchema = new Schema({});

mongoose.model('pokemon', pokemonSchema);
