var Twit = require('twit');
var config = require('./config.js');

var T = new Twit(config);

// Twit configuration

T.get('users/show', { screen_name: 'jonahkirangi' },  function (err, data, response) {
  console.log(data);
});
