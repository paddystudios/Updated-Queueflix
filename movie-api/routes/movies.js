const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// 🔍 SEARCH route
router.get('/search', async (req, res) => {
  const { query } = req.query;

  console.log("📡 Incoming search query:", query); // debug log

  if (!query || query.trim() === '') {
    return res.status(400).json({ message: 'Missing search query' });
  }

  try {
    const regex = new RegExp(query, 'i'); // case-insensitive match
    const results = await Movie.find({ title: regex });

    console.log("✅ Results found:", results.length); // debug log

    if (results.length === 0) {
      return res.status(404).json({ message: 'No movies found' });
    }

    res.json(results);
  } catch (err) {
    console.error('🔥 Search error:', err); // full error
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new movie
router.post('/', async (req, res) => {
  const { title, year, imdbID, type } = req.body;

  if (!title || !imdbID) {
    return res.status(400).json({ message: 'Missing required fields: title or imdbID' });
  }

  const movie = new Movie({ title, year, imdbID, type });

  try {
    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    console.error("❌ Error saving movie:", err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
