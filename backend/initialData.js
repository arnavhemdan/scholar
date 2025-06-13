import Courses from "./UI-Models/Courses/Courses.js";
import {CoursesData} from "./UI-Models/Courses/CoursesData.js";
import ContcatDetails from "./UI-Models/ContactDetails/ContactDetails.js"
import { ContactDetailsData } from "./UI-Models/ContactDetails/ContactDetailsData.js";

import Student from "./UI-Models/Students/Students.js";
import {StudentsData} from "./UI-Models/Students/StudentsData.js";

export const initialData = async() =>{
      await Courses.create(CoursesData)
        .then(() => console.log("Courses initialized successfully"))
        .catch((err) => console.error("Error initializing Courses:", err));
      await ContcatDetails.create(ContactDetailsData)
        .then(() => console.log("ContactDetails initialized successfully"))
        .catch((err) => console.error("Error initializing ContactDetails:", err));
        
      await Student.create(StudentsData)
        .then(() => console.log("Student initialized successfully"))
        .catch((err) => console.error("Error initializing Student:", err));
    
    }; 
