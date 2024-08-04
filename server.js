const mongoose = require('mongoose');
const app = require('./app');
// const { mongoURI } = require('./config');
const dotenv = require('dotenv');
dotenv.config();


const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });
