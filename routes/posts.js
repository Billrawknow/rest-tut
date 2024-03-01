const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

//GET BACK ALL THE POSTS
router.get ('/', async (req, res) => {
    try { 
        const posts = await Post.find ();
        res.json(posts);
    }catch (err) {
            res.json ({ message:err});
    }
    
});

//SUBMITS A POST
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

//SPECIFIC POST
router.get('/:postID', async (req, res)=> {
    try {
   
   const post = await Post.findById(this.params.PostID);
   res.json(post);
        
} catch(err){
    res.json({ message: err });
}
});


module.exports = router;
