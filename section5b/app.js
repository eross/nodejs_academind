const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'views', 'err404.html'));
});

app.listen(3000);
