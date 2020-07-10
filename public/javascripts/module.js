var moment = require('moment')

const name = [
    {
      text: "Hi there!",
      user: "Amando",
      added: moment('2020-07-09 22:40:00')
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: moment('2020-07-09 22:47:00')
    }
];

// var x = moment();
// var y = moment('2020-07-09 22:40:00');
// var z = y.add(1, 'day');

// if (z < x) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

exports.name = name;