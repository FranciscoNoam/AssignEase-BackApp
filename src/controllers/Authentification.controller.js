require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Userdb = require('../models/User.model');

exports.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

exports.generateToken = (user) => {
    const payload = {
        id: user._id,
        username: user.username,
        name: user.name,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });
};

exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return false;
    }
};

exports.authUser = async (req, res) => {

    try {
        const { username, password } = req.body;

        const user = await Userdb.findOne({ username: username }).select('name username password');
        if (!user) {
            return res.status(404).json({ error: 'Utilisateur introuvable' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Mot de passe incorrect' });
        }

        const token = this.generateToken(user);

        res.json({ token });
    } catch (error) {
        res.send({ ststus: 400, mesage: error.message });
    }

};
