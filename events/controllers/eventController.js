var Events = require('../models/event');

module.exports.get = function(req, res, next){
  Events.findById(req.params.eventId, function(err, event){
    if (err) next(err);
    else res.json(event);
  });
};

module.exports.getAll = function(req, res, next){
  Events.find(function(err, allEvents){
    if (err) next(err);
    else res.json(allEvents);
  });
};

module.exports.create = function(req, res, next){
  var event = new Events(req.body);
  event.save(function(err, event){
    if (err) next(err);
    else res.json(event);
  });
};

module.exports.update = function(req, res, next){
  Events.findById(req.params.eventId, function(err, event){

    event.title = req.body.title;
    event.from = req.body.from;
    event.description = req.body.description;
    event.location = req.body.location;
    event.participants = req.body.participants;
    event.to = req.body.to;

    event.save(function(err, event){
      if (err) next(err);
      else res.json(event);
    });
  });
};

module.exports.delete = function(req, res, next){
  Events.findOneAndRemove(req.params.eventId, function(err, event){
    console.log(err, event);
    if (err) next(err);
    else res.json(event);
  });
};

module.exports.search = function(req, res, next){
  var keyword = req.params.keyword || "";
  Events.find({ title: new RegExp(keyword, "ig") }, function(err, events){
    if (err) next(err);
    else res.json(events);
  });
};