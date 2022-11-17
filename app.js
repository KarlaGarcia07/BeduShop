const express = require('express');
const mongoose = require("mongoose");
var cors = require('cors');

require('./src/config/passport')

const app = express();
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGOURI);

app.use('/v1', require('./src/routes'));

app.listen(process.env.PORT, () => console.log("The server is Alive!!"))

app.get('/', (req, res) => res.send("Hola Mundo"))