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
  var event = new Event(req.body);
  event.save(function(err, event){
    if (err) next(err);
    else res.json(event);
  });
};

module.exports.update = function(req, res, next){
  Events.update(req.params.eventId, { $set: req.body }, function(err, event){
    if (err) next(err);
    else res.json(event);
  });
};

module.exports.delete = function(req, res, next){
  Events.findOneAndRemove(req.params.eventId, function(err, event){
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