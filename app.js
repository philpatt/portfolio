var express = require('express');
var path = require('path')
var app = express();

app.set('view engine','ejs')

app.set('views', path.join(__dirname, 'templates'));
//app.use(express.static(path.join(__dirname, 'views')));


// Set Controllers
app.use('/', require('./controllers/home.js')); 



app.listen(3000);