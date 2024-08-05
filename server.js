const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

// Connect to MongoDB
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection failed:', err.message);
  }
};

dbConnect();

// Middleware
app.use(express.json());

if (process.env.NODE_ENV !== 'local') {
  app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
} else {
  app.use(cors({
    credentials: true,
  }));
}

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// API routes
// app.use('/api', require('./routes/api')); // Uncomment this line and add your API routes

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5600;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
