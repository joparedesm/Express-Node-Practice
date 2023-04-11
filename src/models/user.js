const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: String,
    email: String,
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'car'
    }],
    password: String,
});

module.exports = mongoose.model('user', UserSchema);