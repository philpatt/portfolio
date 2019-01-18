var express = require('express');
var router = express.Router();
var Star = require('./Star');


var NUM_STARS = 10;
var stars = [];



router.get('/', function(req, res){
    var star = new Star(10,10);
    console.log(star.area)
    res.render('home.ejs', {name : 'Phil'});
});


module.exports = router;