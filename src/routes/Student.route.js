const express = require("express");
const Studentdb = require("../models/Student.model");
const router = express.Router();

const roleRouter = express.Router();
const cAuth = require('../controllers/Authentification.controller');

roleRouter.get('/', cAuth.verifyJWT, (req, res) => {
    try {
        Studentdb.find().then((result) => {
            res.status(200).send({ message: "Success", data: result });
        }).catch((err) => {
            res.status(400).send({ message: err.message });
        });
    } catch (err) {
        console.log("api/teacher/ Error", err.message);
        res.status(400).send({ message: err.message });
    }
});


roleRouter.get('/:id', (req, res) => {
    try {
        Studentdb.findById(req.params.id).then((result) => {
            res.status(200).send({ message: "Success", data: result });
        }).catch((err) => {
            res.status(400).send({ message: err.message });
        });
    } catch (err) {
        console.log("api/teacher/" + req.params.id + " Error", err.message);
        res.status(400).send({ message: err.message });
    }
});


roleRouter.post('/', (req, res) => {
    try {
        const { first_name, last_name, email } = req.body;
        if (!first_name || !last_name || !email) { throw new Error("Donnée invalide"); }

        const teacher = new Studentdb({
            first_name,
            last_name,
            email
        });
        teacher.save().then((result) => {
            res.status(200).send({ message: "Success", data: result });
        }).catch((err) => {
            res.status(400).send({ message: err.message });
        });
    } catch (err) {
        console.log("api/teacher/post Error", err.message);
        res.status(400).send({ message: err.message });
    }
});

roleRouter.put('/:id', (req, res) => {
    try {
        const { first_name, last_name, email, photo } = req.body;
        if (!first_name || !last_name || !email) { throw new Error("Donnée invalide"); }

        Studentdb.updateOne({ _id: req.params.id }, {
            first_name: first_name,
            last_name: last_name,
            email: email
        }).then((result) => {
            res.status(200).send({ message: "Success", data: result });
        }).catch((err) => {
            res.status(400).send({ message: err.message });
        });
    } catch (err) {
        console.log("api/teacher/put/" + req.params.id + " Error", err.message);
        res.status(400).send({ message: err.message });
    }
});

roleRouter.delete('/:id', (req, res) => {
    try {
        Studentdb.deleteOne({ _id: req.params.id }).then((result) => {
            res.status(200).send({ message: "Success", data: result });
        }).catch((err) => {
            res.status(400).send({ message: err.message });
        });
    } catch (err) {
        console.log("api/teacher/delete/" + req.params.id + " Error", err.message);
        res.status(400).send({ message: err.message });
    }
});

router.use('/api/student', roleRouter);


module.exports = router;