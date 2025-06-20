import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  phoneNo: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  }, image: {
    type: String,
   
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

export default Student;
