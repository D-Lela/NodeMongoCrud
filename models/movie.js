const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    Series_Title: {
        type: String,
        required: true
    },
    Released_Year: {
        type: String,
        required: true
    },
    Overview: {
        type: String,
        required: true
    }
}, { timestamps : true});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;