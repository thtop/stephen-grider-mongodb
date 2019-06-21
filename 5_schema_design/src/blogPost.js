const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = Schema({
    title: String,
    content: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comment'
    }]
});

const BlogPost = mongoose.mode('blogPost', BlogPostSchema);

module.exports = BlogPost;