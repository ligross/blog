var express = require('express');
var PostsModel = require('../model/blog_db.js').PostsModel;

var router = express.Router();

/* Get all posts*/
router.get('/', function (req, res) {
    return PostsModel.find(function (err, posts) {
        if (err) {
            res.statusCode = 500;
            return res.send('Server error');
        } else {
            return res.render('index', {
                locals: {posts: posts}
            });
        }
    })

});

/* Create a post */
router.post('/', function (req, res) {
    res.send('The power to create The New Post');
});

/* Read a post */
router.get('/:id', function (req, res) {
    res.send('The power to read The Post');
});

/* Update a post */
router.put('/:id', function (req, res) {
    res.send('The power to update The Post');
});

/* Delete a post */
router.delete('/:id', function (req, res) {
    res.send('Delete it just for fun');
});

module.exports = router;