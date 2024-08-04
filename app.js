const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const tweetRoutes = require('./routes/tweetRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);

module.exports = app;
