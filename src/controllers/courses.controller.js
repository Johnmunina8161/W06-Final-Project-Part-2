const Course = require('../models/courses.model');

exports.create = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.list = async (req, res) => {
  const courses = await Course.find().populate('students');
  res.json(courses);
};

exports.get = async (req, res) => {
  const course = await Course.findById(req.params.id).populate('students');
  if (!course) return res.status(404).json({ error: 'Not found' });
  res.json(course);
};

exports.update = async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!course) return res.status(404).json({ error: 'Not found' });
  res.json(course);
};

exports.remove = async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course) return res.status(404).json({ error: 'Not found' });
  res.json({ success: true });
};