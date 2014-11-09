var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', function (err) {
    //TODO add logging
});
db.once('open', function callback() {
    //TODO add logging
});

var Posts = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true}
    //TODO need moooore fields
});

var PostsModel = mongoose.model('Posts', Posts);

module.exports.PostsModel = PostsModel;