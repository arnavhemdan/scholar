import mongoose from 'mongoose';

const EnrollmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  courseTitle: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    trim: true
  },
  experience: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Enrollment', EnrollmentSchema);
