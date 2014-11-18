var express = require('express');
var app = express();
var Twit = require('twit');
var config = require('./config');
var router = express.Router();

var T = new Twit(config);

// Routing
app.use('/', router);
app.set('view engine', 'hbs');

router.use(express.static(__dirname + '/app'));

// Get Tweets
app.get('/', function (req, res) {
  var user = 'jonahkirangi';
  T.get('statuses/user_timeline', { screen_name: user, count: 20 }, function (err, data) {
    console.log('Retrieved ' + data.length + ' tweets from ' + user);
    res.send(data);
  });
});

// Start server
app.listen(3000);
console.log('Server running on port 3000');
