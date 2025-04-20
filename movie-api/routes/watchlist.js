const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Movie = require('../models/movie');

// Watchlist schema
const watchlistSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  addedAt: {
    type: Date,
    default: Date.now
  }
});

const Watchlist = mongoose.model('Watchlist', watchlistSchema);

//POST

router.post('/', async (req, res) => {
  const { imdbID } = req.body;

  if (!imdbID) {
    return res.status(400).json({ error: 'imdbID is required' });
  }

  try {
    const movie = await Movie.findOne({ imdbID });

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found in DB' });
    }

    const alreadyExists = await Watchlist.findOne({ movie: movie._id });
    if (alreadyExists) {
      return res.status(409).json({ error: 'Movie already in watchlist' });
    }

    const added = await Watchlist.create({ movie: movie._id });
    res.status(201).json(added);
  } catch (err) {
    console.error('Add to watchlist error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

//GET

router.get('/', async (req, res) => {
    try {
      const watchlist = await Watchlist.find().populate('movie');
      res.json(
        watchlist.map(item => ({
          watchlistId: item._id,     
          ...item.movie._doc              
        }))
      );
    } catch (err) {
      console.error('Get watchlist error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

//DELETE 

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Watchlist.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Item not found in watchlist' });
    }
    res.status(200).json({ message: 'Movie removed from watchlist' });
  } catch (err) {
    console.error('Delete watchlist error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

//PUT

router.put('/:id', async (req, res) => {
  try {
    const watchlistItem = await Watchlist.findById(req.params.id).populate('movie');
    if (!watchlistItem) {
      return res.status(404).json({ error: 'Watchlist item not found' });
    }

    const updatedMovie = await Movie.findByIdAndUpdate(
      watchlistItem.movie._id,
      req.body,
      { new: true }
    );

    res.json(updatedMovie);
  } catch (err) {
    console.error('Update watchlist error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
