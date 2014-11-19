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
app.get('/getposts', function(req,res){
  console.log(req.headers.referer.split('=')[1]);
  var searchTerm = req.headers.referer.split('=')[1];
  T.get('statuses/user_timeline', { screen_name: searchTerm, count: '20'}, function(err, reply) {
    console.log('Retrieved ' + reply.length + ' tweets from @' + searchTerm);
    res.send(reply);
  });
});

// Start server
app.listen(3000);
console.log('Server running on port 3000');
