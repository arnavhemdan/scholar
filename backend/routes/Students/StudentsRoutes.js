import express from 'express'
const router =express.Router();
import students from '../../UI-Models/Students/Students.js'
router.post('/scholarsItechfeedback',async(req,res)=>{
 try {
    const { name, email, phone, course, message } = req.body;
    const phoneNo=phone;
    console.log(req.body)
    if (!name || !email || !course) {
      return res.status(400).json({ error: 'Name, email and course are required.' });
    }

    const feedback = new students({ name, email, phoneNo, course, message });
    await feedback.save();

    res.status(201).json({ message: 'Feedback saved successfully.' });
  } catch (err) {
    console.error('Error saving feedback:', err);
    res.status(500).json({ error: 'Internal server error.' });
  }
    
});

router.get('/getscholarsItechStudents',async(req,res)=>{
 try {
    const student = await students.find() ;
    
    res.json(student);
  } catch (err) {
    console.error('Error fetching students:', err);
res.status(500).json({ error: 'Server error' });  }
    
});



export default router;