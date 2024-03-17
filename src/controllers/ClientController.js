const Clientdb = require("../models/Client.mopolo.model");

exports.tp = (req,res)=>{
Clientdb.find().then((data)=>{
    res.send(data);
});
};