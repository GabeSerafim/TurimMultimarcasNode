const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const root = require('./utils/path');
const sequelize = require('./utils/database');
const routes = require('./routes/index.routes.js');
const app = express();

// app.use(cors);
app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","x-requested-with, Content-Type, origin, authorization, accept, client-security-token")
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE,HEAD,OPTIONS');
    app.use(cors());
    next();
});
app.use(bodyParser.json())
app.use(routes);
app.use((req, res) => {
    res.status(404)
})
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message: message})
})
sequelize.sync()
.then(result => {
    app.listen(8080)
})
.catch(err => console.log(err));