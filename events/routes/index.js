var express = require('express');
var router = express.Router();
var Events = require('../models/event.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Events.find({}, function(err, events){
    if (err) console.log(err);
    res.render('index', { title: 'Express', events: events });
  });
});

module.exports = router;