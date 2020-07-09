var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date('July 07, 2020 13:24:00')
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date('July 08, 2020 13:25:00')
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

router.post('/', function(req, res, next) {
  let name = req.body.name;
  console.log(name);
  let message = req.body.message;
  console.log(message);

  let newMessage = {text: message, user: name, added: new Date()};

  messages.push(newMessage);

  res.redirect('/');
});

module.exports = router;
