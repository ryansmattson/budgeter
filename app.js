const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    console.log('youre getting here.');

    res.send({ status: 1 });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});