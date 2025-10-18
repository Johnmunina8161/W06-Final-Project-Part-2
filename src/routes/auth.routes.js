const express = require('express');
const passport = require('passport');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication via Google and GitHub
 */

/**
 * @swagger
 * /auth/google:
 *   get:
 *     summary: Login with Google
 *     tags: [Auth]
 *     responses:
 *       302:
 *         description: Redirect to Google login
 */
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     summary: Google OAuth callback
 *     tags: [Auth]
 *     responses:
 *       302:
 *         description: Redirect after successful or failed login
 */
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/')
);

/**
 * @swagger
 * /auth/github:
 *   get:
 *     summary: Login with GitHub
 *     tags: [Auth]
 *     responses:
 *       302:
 *         description: Redirect to GitHub login
 */
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

/**
 * @swagger
 * /auth/github/callback:
 *   get:
 *     summary: GitHub OAuth callback
 *     tags: [Auth]
 *     responses:
 *       302:
 *         description: Redirect after successful or failed login
 */
router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/')
);

module.exports = router;
