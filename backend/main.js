import express from 'express';
const router = express.Router();

import CoursesRoute from "./routes/Courses/CoursesRoute.js";
import ContactDetailsRoute from "./routes/ContactDetails/ContactDetailsRoute.js"

import ContactQueriesRoute from "./routes/ContactQueries/ContactQueriesRoute.js"
// Define route mounting point
export default function setupRoutes() {
    router.use( CoursesRoute); // All course routes now prefixed with /courses
    router.use( ContactDetailsRoute); // All course routes now prefixed with /courses
    router.use( ContactQueriesRoute); // All course routes now prefixed with /courses
    
    return router;
}
