import mongoose from 'mongoose';

const  CourseSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  image: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  }
  
});


export default mongoose.model('Courses', CourseSchema);
