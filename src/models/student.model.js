const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  course: { type: String, required: true },
  role: { type: String, enum: ['Student', 'Grader', 'Teacher'], default: 'Student' },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Student', studentSchema);
