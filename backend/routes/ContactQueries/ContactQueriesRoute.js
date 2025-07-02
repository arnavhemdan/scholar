import express from 'express';
const router = express.Router();
import ContactQuaries from '../../UI-Models/ContactQuaries/ContactQuaries.js';

router.post('/ContactQueries', async (req, res) => {
  try {
    const { name, email, phone,message,subject } = req.body;
   const phoneNumber=phone
    const description=message
    const newQuery = new ContactQuaries({
      name,
      email,
      phoneNumber,
      description,
      subject
    });
    await newQuery.save();
    res.status(201).json({ success: true, message: 'Query saved successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

export default router;
