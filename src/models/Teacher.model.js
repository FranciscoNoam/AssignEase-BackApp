const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            },
            message: "Email est invalide",
        },
    },
    photo: { type: String },
});

const Teacherdb = mongoose.model('teachers', teacherSchema);

module.exports = Teacherdb;
