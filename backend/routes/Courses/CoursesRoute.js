import express from 'express';
const  router =express.Router();
import Courses from '../../UI-Models/Courses/Courses.js';

router.get('/getCourses',async (req,res)=>
{
   try{
      console.log("backend");
    const Course= await Courses.find();
    res.json(Course);
   }
   catch(error)
   {
        res.status(500).json({ error: 'Server error' });
   }
});
export default router;