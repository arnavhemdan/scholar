import express from 'express';
const router = express.Router();

import CoursesRoute from "./routes/Courses/CoursesRoute.js";

// Define route mounting point
export default function setupRoutes() {
    router.use( CoursesRoute); // All course routes now prefixed with /courses
    return router;
}
