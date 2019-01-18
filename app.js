var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var path = require('path')
var app = express();


app.set('view engine','ejs')


app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'views')));
app.use(ejsLayouts);

app.get('/', function (req, res) {
    res.render('home');
});

// Set Controllers
//app.use('/', require('./controllers/home.js')); 


app.listen(process.env.PORT || 3000);

module.exports = app;