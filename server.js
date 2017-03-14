
//importing and setiing up DB
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Contact = require('./models/contactModel');

mongoose.connect('mongodb://localhost/contacts');

var app = express();

//getting static libraries and setting up middleware
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//get all contacts from DB to home page
app.get('/home', function(req, res, next){
  Contact.find(function(err, contact){
		if (err) { return next(err); }
		if (!contact) { return next(new Error("can't find contacts!")); }
   		res.json(contact);
   	});
});

//add a new contact and save to DB
app.post('/addContact', function(req, res, next){

  var contact = new Contact(req.body);
  contact.save(function(err, contact){
    if(err){
      return next(err); }
    res.json(contact._doc);
  });
});

app.listen('4000');
