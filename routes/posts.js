const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

router.get ('/', async (req, res) => {
    try {
        catch (error) {
            
        }
        
        
        
        
        {

        }
    }
    
});

 router.post ('/', async (req, res) => {
    const post = new Post ({
        title: req.body.title,
        description: req.body.description
    });

    try {
    const savedPost = await post.save();
    restart.json(savedPost);
     } catch (err) {
        res.json ({ message:err});
        
     }
   
});




module.exports = router;
