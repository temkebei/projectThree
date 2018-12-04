const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: 'Required'
    },

    password: {
        type: String,
        trim: true,
       
    },

});


const users = mongoose.model('users', UserSchema);

module.exports = users;