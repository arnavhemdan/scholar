import Courses from "./UI-Models/Courses/Courses.js";
import {CoursesData} from "./UI-Models/Courses/CoursesData.js";

export const initialData = async() =>{
      await Courses.create(CoursesData)
        .then(() => console.log("Courses initialized successfully"))
        .catch((err) => console.error("Error initializing Courses:", err));
    
    }; 
