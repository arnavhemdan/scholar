import express from 'express';
const router = express.Router();
import Courses from '../../UI-Models/Courses/Courses.js';

router.get('/getCourses', async (req, res) => { 
  try {
    const courses = await Courses.find().lean();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
