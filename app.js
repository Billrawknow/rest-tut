const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv').config();

app.use(bodyParser.json()); // for parsing application/json

//Import Routes
const postsRoute = require('./routes/posts');

//Middleware

app.use('/posts',postsRoute);

// Routes
app.get('/', (req, res) => {
    res.send('We are on Home');
});



// Connect to DB

const dbURI = process.env.DB_URI; // It's best practice to use environment variables for your URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to DB!'))
  .catch(err => console.error(err));
  
// Start listening to the server
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running locally: http://localhost:${port}`));
