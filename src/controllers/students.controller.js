const Student = require('../models/students.model');

exports.create = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.list = async (req, res) => {
  const students = await Student.find().populate('enrolledCourses');
  res.json(students);
};

exports.get = async (req, res) => {
  const student = await Student.findById(req.params.id).populate('enrolledCourses');
  if (!student) return res.status(404).json({ error: 'Not found' });
  res.json(student);
};

exports.update = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!student) return res.status(404).json({ error: 'Not found' });
  res.json(student);
};

exports.remove = async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  if (!student) return res.status(404).json({ error: 'Not found' });
  res.json({ success: true });
};