var path = require('path')
var express = require('express');
var app = express();


// require('routes')(app, path)
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.use(express.static(__dirname + '/'))

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/products', function(req, res) {
    res.render('pages/products');
});

app.get('/reviews', function(req, res) {
    res.render('pages/reviews');
});

app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.get('/hummos_locater', function(req, res) {
    res.render('pages/hummos_locater');
});
app.listen(8080);
console.log('8080 is the magic port');






