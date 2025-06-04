import mongoose from 'mongoose';

const CustomerQuerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  subjectArea: {
    type: String, // e.g., "Technical", "Billing", "General"

  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('ContactQuaries', CustomerQuerySchema);
