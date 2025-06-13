import express from 'express';
import nodemailer from 'nodemailer'
const router=express.Router();
router.post('/enrollments', async (req, res) => {
  const { name, email, phone, courseTile, message, experince } = req.body;

  // 1. Configure email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // 2. Compose email
  const mailOptions = {
    from: `"Enrollment Bot" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New Enrollment: ${courseTile}`,
    html: `
      <h3>Student Enrollment Details</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Course:</strong> ${courseTile}</li>
        <li><strong>Experience:</strong> ${experince}</li>
      </ul>
      <h4>Message:</h4>
      <p>${message || 'No message provided'}</p>
    `
  };

  try {
    // 3. Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Enquiry submitted successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error processing enquiry',
      error: error.message 
    });
  }
});
export default router;