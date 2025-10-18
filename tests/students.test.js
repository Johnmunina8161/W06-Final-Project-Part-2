const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');
const Student = require('../src/models/students.model');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI_TEST || 'mongodb://localhost:27017/w06proj_test');
});

afterEach(async () => { await Student.deleteMany({}); });
afterAll(async () => { await mongoose.connection.close(); });

test('POST /api/students -> creates student', async () => {
  const res = await request(app).post('/api/students').send({ firstName: 'John', lastName: 'Doe', email: 'john@example.com' }).expect(201);
  expect(res.body).toHaveProperty('_id');
  expect(res.body.firstName).toBe('John');
});

test('GET /api/students -> returns empty array initially', async () => {
  const res = await request(app).get('/api/students').expect(200);
  expect(Array.isArray(res.body)).toBe(true);
});