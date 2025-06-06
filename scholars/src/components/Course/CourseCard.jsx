import React from 'react';
import { Star, Users, Clock } from 'lucide-react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-48 object-cover"
        />
        {course.featured && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="mb-2">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
            {course.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{course.description}</p>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {course.duration}
          </div>
          {/* <div className="flex items-center text-gray-600 text-sm">
            <Users className="h-4 w-4 mr-1" />
            {course.students.toLocaleString()}
          </div> */}
        </div>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4"
                fill={i < Math.floor(course.rating) ? "currentColor" : "none"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">{course.rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-blue-600 font-bold">{course.price}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
