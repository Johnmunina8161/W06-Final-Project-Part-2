const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  description: String,
  students: [{ type: String }], // array of student emails
});

module.exports = mongoose.model('Course', courseSchema);
