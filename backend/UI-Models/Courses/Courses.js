import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true         // text or simple index
  },
  category: {
    type: String,
    required: true,
    index: true         // indexing for filtering by category
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
    max: 5,
    index: true         // index if you filter/sort by rating
  },
  image: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false,
    index: true         // for featured course filters
  }
});

// Optional: text index for search
CourseSchema.index({ title: 'text', description: 'text' });

export default mongoose.model('Courses', CourseSchema);
