var router = require('express').Router();
var eventController = require('../controllers/eventController.js');

router
  .get('/events/:eventId', eventController.get)
  .get('/events', eventController.getAll)
  .post('/events', eventController.create)
  .put('/events/:eventId', eventController.update)
  .delete('/events/:eventId', eventController.delete);

module.exports = router;