
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  pincode:{
    type:Number,
    required: true
},
  phoneNumber: {
    type: Number,
    required: true
  },
  operationHours: {
    type: String, // e.g., "Mon-Fri: 9AM - 6PM"
    required: true
  },
  googleMapLink: {
    type: String,
    required: false
  }
});

export default mongoose.model('ContactDetails', ContactSchema);
