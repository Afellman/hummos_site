var path = require('path')
var express = require('express');
var app = express();
const bodyParser = require("body-parser");
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

// require('routes')(app, path)
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// use res.render to load up an ejs view file
app.use(express.static(__dirname + '/'))


var transporter = nodemailer.createTransport(smtpTransport({
    service: 'Gmail',
    auth: {
      user: 'hummoscontactus@gmail.com',
      pass: 'hummos1985'
    }
  })
) 
  


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


app.post('/contact-submit', (req, res) => {
    var mailOptions = {
        from: 'hummoscontactus@gmail.com',
        to: 'hummos1985@gmail.com',
        cc: 'andrewfellman@abrahamsnatural.com',
        subject: req.body.subject,
        text: req.body.message,
        replyTo: req.body.email,

      };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    console.log(req.body)
    res.end('Submitted')
})





app.listen(8080);
console.log('8080 is the magic port');






