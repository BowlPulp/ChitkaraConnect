const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  venue: { type: String, required: true },
  dateOfEvent: { type: Date, required: true },
  timings: { type: String, required: true },
  studentsAllowed: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true }
});

const EventModel = mongoose.model('Event', eventSchema);

module.exports = EventModel;
