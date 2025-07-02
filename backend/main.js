import express from 'express';
const router = express.Router();

import CoursesRoute from "./routes/Courses/CoursesRoute.js";
import ContactDetailsRoute from "./routes/ContactDetails/ContactDetailsRoute.js"

import ContactQueriesRoute from "./routes/ContactQueries/ContactQueriesRoute.js"
import StudentsRoutes from './routes/Students/StudentsRoutes.js';
import EnrollmentRoute from './routes/Enrollment/EnrollmentRoute.js';
// Define route mounting point
export default function setupRoutes() {
     router.use( CoursesRoute); 
    router.use( ContactDetailsRoute); 
    router.use( ContactQueriesRoute); 
    router.use( StudentsRoutes); 
    router.use(EnrollmentRoute);
    return router;
}
