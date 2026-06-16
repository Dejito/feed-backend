const express = require('express');

const bodyParser = require('body-parser');

const feedRoute = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); //for x-wwww-form-urlencoded <form>
app.use(bodyParser.json()); //for application json

app.use((error, req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next(); 
});

app.use('/feed', feedRoute);


app.listen(8080);