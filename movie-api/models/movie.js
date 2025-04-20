const mongoose = require('mongoose');

// Movie catalog schema
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: Number,
  imdbID: { type: String, required: true, unique: true },
  type: String
});

// Create and export Movie model
const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
