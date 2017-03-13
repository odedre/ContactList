
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Contact = require('./models/contactModel');

mongoose.connect('mongodb://localhost/contacts');



var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/home', function(req, res, next){
  // debugger;
  console.log('server running!');
  // res.sendFile('index.html');
  Contact.find(function(err, contact){
		console.log(contact);
		if (err) { return next(err); }
		if (!contact) { return next(new Error("can't find contacts!")); }
   		console.log(contact);
   		res.json(contact);
   	});
});



app.post('/addContact', function(req, res, next){
  console.log(req.body);

  var contact = new Contact(req.body);

  console.log("hello handsome ;) ");

  contact.save(function(err, contact){
    if(err){
      console.log(err);
      return next(err); }
    console.log(contact._doc);
    res.json(contact._doc);
  });
});




app.listen('4000');
