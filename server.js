const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Jonatan Troche');
});

const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server is listenning at port ' + (process.env.port || port));