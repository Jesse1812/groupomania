const express = require('express');
const cors = require('cors');
const db = require('./db_connection');

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization,'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(express.json());
app.use(cors());

//routes
app.use('/api/auth', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;
