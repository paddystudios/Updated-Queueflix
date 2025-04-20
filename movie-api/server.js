require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movies');
const cors = require('cors'); 
const watchlistRoutes = require('./routes/watchlist');


const app = express();



// CORS configuration
app.use(cors({
  origin: 'http://localhost:3001',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true 
}));


// Middleware
app.use(express.json());

// Routes
app.use('/api/movies', movieRoutes); 
app.use('/api/watchlist', watchlistRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});