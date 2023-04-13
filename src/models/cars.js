const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    salesman: { type: Schema.Types.ObjectId, ref: 'user' },
});

module.exports = mongoose.model('car', carSchema);