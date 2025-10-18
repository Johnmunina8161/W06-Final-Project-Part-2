const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');
const Course = require('../src/models/courses.model');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI_TEST || 'mongodb://localhost:27017/w06proj_test');
});

afterEach(async () => { await Course.deleteMany({}); });
afterAll(async () => { await mongoose.connection.close(); });

test('POST /api/courses -> creates course', async () => {
  const res = await request(app).post('/api/courses').send({ name: 'Math 101', code: 'MATH101' }).expect(201);
  expect(res.body).toHaveProperty('_id');
  expect(res.body.name).toBe('Math 101');
});

test('GET /api/courses -> returns empty array initially', async () => {
  const res = await request(app).get('/api/courses').expect(200);
  expect(Array.isArray(res.body)).toBe(true);
});