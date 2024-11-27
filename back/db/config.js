const mongoose = require('mongoose');


const mongoose_connect = () => {
    mongoose.set('strictQuery', false);
    try {
        mongoose.connect('mongodb+srv://sahil:sahil1234@cluster0.rmwtm6n.mongodb.net/database?retryWrites=true&w=majority')
        console.warn('success mongoose_connect');
    } catch (error) {
        console.log(error);
        console.error('error from mongoose_connect')
    }
}

module.exports = mongoose_connect