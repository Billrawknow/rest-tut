const express = require('express');

const router = express.Router();
const Post = require('../models/Post');

router.get ('/', (req, res) => {
    res.send('We are on Posts');
});

router.get('/specific', (req, res) => {
    res.send('Specific Posts');
});


router.post('/',(req, res)=> {
    const post = new Post ({
        title : req.body.title,
    })
});

module.exports = router;
