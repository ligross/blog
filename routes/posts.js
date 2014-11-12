var express = require('express');
var PostsModel = require('../model/blog_db.js').PostsModel;

var router = express.Router();

/* Get all posts*/
router.get('/', function (req, res) {
    return PostsModel.find(function (err, posts) {
        if (err) {
            //TODO logging
            res.statusCode = 500;
            return res.send('Server error');
        } else {
            return res.render('index', {posts: posts});
        }
    })
});

/* Create a post */
router.post('/', function (req, res) {
    var post = new PostsModel({title: req.body.title, body: req.body.body});
    post.save( function (err) {
        if(err) {
            //TODO logging
            res.statusCode = 500;
            return res.send('Server error');
        } else {
            return res.redirect(303, '/posts');
        }
    });
});

/* Read a post */
router.get('/view/:id', function (req, res) {
    return PostsModel.findById(req.params.id, function (err, post) {
        if (err) {
            //TODO logging
            res.statusCode = 500;
            return res.send('Server error');
        } else {
            return res.render('view_post', {post: post});
        }
    })
});

/* Update a post */
router.put('/:id', function (req, res) {
    res.send('The power to update The Post');
});

/* Delete a post */
router.delete('/:id', function (req, res) {
    res.send('Delete it just for fun');
});

router.get('/create', function (req, res) {
        return res.render('create_post');
});

module.exports = router;