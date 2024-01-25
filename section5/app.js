const http = require('http');

const express = require('express');

const app = express();

//always runs
app.use('/',(req, res, next)=>{
    console.log('This always runs');
    next();
})
app.use('/add-product',(req, res, next) => {
    console.log('In add-product');
    res.send('<h1>Hello from add-product</h1>');
});

// never runs
app.use('/',(req, res, next) => {
    console.log('In another  middleware');
    res.send('<h1>Hello from express</h1>');
});

//const server = http.createServer(app);

//server.listen(3000);

app.listen(3000);