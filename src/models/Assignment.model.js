const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    coefficient: { type: Number, required: true, default: 1 },
    photo: { type: String },
    note: { type: Number, required: true, default: 0 },
    remark: { type: String, default: "" },
    isrend: { type: Boolean, default: false },
    matter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'matters',
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'students',
        required: true
    },
});

const Assignmentdb = mongoose.model('assignments', assignmentSchema);

module.exports = Assignmentdb;
