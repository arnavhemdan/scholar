import express from 'express'
const router =express.Router();
import students from '../../UI-Models/Students/Students.js'
import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'staticfiles'); // Make sure this folder exists
  },
   filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `StudentsFeedback${Date.now()}-${file.fieldname}${ext}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });
router.post('/scholarsItechfeedback', upload.single('image'), async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;
    const phoneNo = phone;
    const imagePath = req.file ? `staticfiles/${req.file.filename}` : null;

    if (!name || !email || !course) {
      return res.status(400).json({ error: 'Name, email and course are required.' });
    }

    const feedback = new students({
      name,
      email,
      phoneNo,
      course,
      message,
      image: imagePath, // Store filename or path if desired
    });

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