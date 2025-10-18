/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - course
 *         - email
 *       properties:
 *         firstName:
 *           type: string
 *           description: First name of the student
 *         lastName:
 *           type: string
 *           description: Last name of the student
 *         course:
 *           type: string
 *           description: Course the student is enrolled in
 *         role:
 *           type: string
 *           enum: [Student, Grader, Teacher]
 *           description: Role of the student
 *           default: Student
 *         email:
 *           type: string
 *           description: Student's email
 *       example:
 *         firstName: John
 *         lastName: Munina
 *         course: CSE341.001 - Web Services
 *         role: Student
 *         email: john.munina@example.com
 */
