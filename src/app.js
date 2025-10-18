
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./auth/oauth');

const studentsRoutes = require('./routes/students.routes');
const coursesRoutes = require('./routes/courses.routes');
const authRoutes = require('./routes/auth.routes');

// Swagger imports
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET || 'devsecret',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// --- Swagger setup ---
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'W06 Final Project API',
      version: '1.0.0',
      description: 'API documentation for Students and Courses',
    },
    servers: [{ url: 'http://localhost:3000/' }],
  },
  apis: ['./src/routes/*.js'], // look for annotations in route files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// --- Root route ---
app.get('/', (req, res) => {
  res.send('Welcome to W06 Final Project API!');
});

app.use('/api/students', studentsRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/auth', authRoutes);

app.get('/health', (req, res) => res.json({ ok: true }));

module.exports = app;
