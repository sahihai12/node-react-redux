const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    item_user_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    item_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    item_type : {
        type: String,
        enum: ['product', 'blog'],
        deafult: 'blog',
    },
    comment_description : {
        type: String,
        required : true
    },
    comment_rating : {
        type: Number,
        required : true
    }
}, {timestamps: true})

Comment = mongoose.model('Comments' , commentSchema)
module.exports = Comment