var express = require('express');
var app = express();
var Twit = require('twit');
var config = require('./config');
var router = express.Router();

var T = new Twit(config);

// Routing
app.use('/', router);
app.set('view engine', 'ejs');

router.use(express.static(__dirname + '/app'));

router.get('/', function(req, res) {
  T.get('statuses/user_timeline', { screen_name: 'jonahkirangi', count: '10' },  function (err, data, response) {
  res.send(data);
  });
});

// Start server
app.listen(3000);
console.log('Server running on port 3000');
