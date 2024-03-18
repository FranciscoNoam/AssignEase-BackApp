const express = require("express");
const Teacherdb = require("../models/Teacher.model");
const router = express.Router();

const roleRouter = express.Router();
const cAuth = require('../controllers/Authentification.controller');
const Userdb = require("../models/User.model");

roleRouter.get('/', cAuth.verifyJWT, (req, res) => {
    try {
        Teacherdb.find().then((result) => {
            res.status(200).send({ message: "Success", data: result });
        }).catch((err) => {
            res.status(400).send({ message: err.message });
        });
    } catch (err) {
        console.log("api/teacher/ Error", err.message);
        res.status(400).send({ message: err.message });
    }
});

router.get('/api/users', cAuth.verifyJWT, async (req, res) => {
    try {
        const data = await Userdb.find();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server ErrorErreur interne du serveur' });
    }
});

roleRouter.get('/:id', (req, res) => {
    try {
        Teacherdb.findById(req.params.id).then((result) => {
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
        const { first_name, last_name, email, photo } = req.body;
        if (!first_name || !last_name || !email || !photo) { throw new Error("Donnée invalide"); }

        const teacher = new Teacherdb({
            first_name,
            last_name,
            email,
            photo
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
        if (!first_name || !last_name || !email || !photo) { throw new Error("Donnée invalide"); }

        Teacherdb.updateOne({ _id: req.params.id }, {
            first_name: first_name,
            last_name: last_name,
            email: email,
            photo: photo
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
        Teacherdb.deleteOne({ _id: req.params.id }).then((result) => {
            res.status(200).send({ message: "Success", data: result });
        }).catch((err) => {
            res.status(400).send({ message: err.message });
        });
    } catch (err) {
        console.log("api/teacher/delete/" + req.params.id + " Error", err.message);
        res.status(400).send({ message: err.message });
    }
});

router.use('/api/teacher', roleRouter);


module.exports = router;