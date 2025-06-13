import express from 'express'
const router =express.Router();
import ContactDetails from "../../UI-Models/ContactDetails/ContactDetails.js";
router.get('/contactDetails', async (req, res) => {
  try {
    console.log('backend contact');
    const contact = await ContactDetails.findOne(); // use findOne() if you're expecting a single contact record
    console.log(contact);
    res.json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
export default router;