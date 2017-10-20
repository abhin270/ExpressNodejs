const http = require('http');
const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter= require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes',dishRouter);



/*.................................................................................*/




app.get('/dishes/:dishId', (req, res, next) => {
    res.end('will send details of the dish:' + req.params.dishId + 'to you!');
});


app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation is not possible with /dishes/' + req.params.dishId);
});


app.put('/dishes/:dishId', (req, res, next) => {
    res.write('updating the dish:' + req.params.dishId);
    res.end('will update the dish: ' + req.body.name + 'with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting  the dish: ' + req.params.dishId);
});

app.use(express.static(__dirname + '/public'));


// app.use((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end(`<html><body><h1>This is an Express Server</h1></body></html>`)
// });


app.listen(3000, ()=> {
    console.log('server started at port 3000');
});