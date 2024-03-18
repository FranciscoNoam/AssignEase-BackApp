const mongoose = require('mongoose');

const matterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    coefficient: {
        type: Number,
        required: true,
        validate: {
            validator: function (value) {
                return value >= 1;
            },
            message: 'Le coefficient doit être supérieur à 1'
        },
        default: 1
    },
    photo: { type: String },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachers',
        required: true
    },
});

const Matterdb = mongoose.model('matters', matterSchema);

module.exports = Matterdb;
