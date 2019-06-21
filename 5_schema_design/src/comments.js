const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: String,
    user: { type: Schema.Types.ObjectId, ref: 'user'}
});

const Comment = mongoose.model('coment', CommentSchema);

module.exports = Comment;