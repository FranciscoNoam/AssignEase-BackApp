const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const app = express();
const server = require("http").createServer(app);

const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(bodyParser.json({ limit: '20mb' }));
app.use(cors(corsOptions));



//++++++++++++++++++++++++ Connection BDD +++++++++++++++++++++++++

const connectDB = require("./src/database/connection");
connectDB();

//++++++++++++++++++++++++ Importation Controllers  +++++++++++++++++++++++++++++++++++++

const cAuth = require('./src/controllers/Authentification.controller');
//++++++++++++++++++++++++ Importation Models +++++++++++++++++++++++++++++++++++++++++

const Userdb = require('./src/models/User.model');



//++++++++++++++++++++++++ Jwt verification  ++++++++++++++++++++++++++++++++++++++++++

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Non autorisé' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = cAuth.verifyToken(token);
    if (!decoded) {
        return res.status(403).json({ error: 'Interdit' });
    }
    req.user = decoded;
    next();
};


//++++++++++++++++++++++++ API ++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.get('/api/init-users', cAuth.createUserInit);
app.post("/login", cAuth.authUser);
app.get('/api/users', verifyJWT, async (req, res) => {
    try {
        const data = await Userdb.find();
            res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server ErrorErreur interne du serveur' });
    }
});



app.get('/',  (req, res) => {
    res.send('Backend API connecté');
});
//++++++++++++++++++++++++ END API ++++++++++++++++++++++++++++++++++++++++++++++++++++++




app.use(function (req, res) {
    res.send({ status: 404, message: 'API introuvable' });
});



var PORT = process.env.PORT || 3000;
var IP = process.env.IP;
server.listen(PORT, () => {

    console.log(`App is listening at Ip:${IP}:${PORT}`);

});
