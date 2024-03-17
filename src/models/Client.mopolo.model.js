const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
});

const Clientdb = mongoose.model('tp_mopolo_client', clientSchema);

module.exports = Clientdb;
