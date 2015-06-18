var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  title: { type: String, required: true },
  from: { type: Date, required: true },
  to: { type: Date, required: true },
  location: { type: String, required: true },
  descriptipn: { type: String },
  participants: { type: [String] }
}, { strict: true });

module.exports = mongoose.model('events', EventSchema);