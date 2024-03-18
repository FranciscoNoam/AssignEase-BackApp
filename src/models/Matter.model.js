const mongoose = require('mongoose');

const matterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    coefficient: { type: Number, required: true,default:1 },
    photo: { type: String },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachers',
        required: true
    },
});

const Matterdb = mongoose.model('matters', matterSchema);

module.exports = Matterdb;
