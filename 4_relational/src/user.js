const mongoose = require('mongoose');
const PostSchema = require('./post');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name) => name.length > 2,
            message: 'Name must be longer than 2 charactres.'
        },
        required: [true, 'Name is required.']
    },
    posts: [PostSchema]
});

UserSchema.virtual('postCount').get(function() {
    
});

const User = mongoose.model('user', UserSchema);

module.exports = User;