var express = require('express');
var router = express.Router();
var myModule = require('../public/javascripts/module');
var messages = myModule.name;
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages, moment: moment });
});

router.post('/', function(req, res, next) {
  let name = req.body.name;
  let message = req.body.message;

  let newMessage = {text: message, user: name, added: moment()};

  messages.push(newMessage);

  res.redirect('/');
});

module.exports = router;