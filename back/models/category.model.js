const { string } = require('joi');
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    item_type : {
        type: String,
        enum: ['product', 'blog'],
        deafult: 'blog',
    },
    category_name : {
        type: String,
        required : true,
        unique: true
    },
    category_description : {
        type: String,
        required : true
    }
}, {timestamps: true})

category = mongoose.model('category' , categorySchema)
module.exports = category