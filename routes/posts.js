const express = require('express');

const router = express.Router();

router.get ('/', (req, res) => {
    res.send('We are on Posts');
});

router.get('/specific', (req, res) => {
    res.send('Specific Posts');
});



module.exports = router;
