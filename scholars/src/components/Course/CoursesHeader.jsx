// CoursesHeader.js
import React from 'react';
import { Leaf } from 'lucide-react';

const CoursesHeader = () => {
  return (
    <div className="bg-gradient-to-r from-[#1a3c2a] to-[#2d5d42] py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#c8b08d]"></div>
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-[#c8b08d]"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-[#c8b08d]"></div>
      </div>
      
      <div className="container mx-auto text-center">
        <div className="inline-flex items-center justify-center bg-[#c8b08d] bg-opacity-20 px-6 py-2 rounded-full mb-4">
          <Leaf className="h-5 w-5 text-[#f9f5f0] mr-2" />
          <span className="text-[#f9f5f0] font-medium">Courses</span>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">Explore Our Courses</h1>
        <p className="text-[#e0d9c9] max-w-2xl mx-auto">
          Discover a wide range of courses designed to help you achieve your professional goals and expand your knowledge.
        </p>
      </div>
    </div>
  );
};

export default CoursesHeader;