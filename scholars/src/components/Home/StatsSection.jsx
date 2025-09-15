// StatsSection.js
import React from 'react';
import { GraduationCap, Users, Award, Clock } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-12 bg-[#e0d9c9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <GraduationCap className="text-[#1a3c2a] w-12 h-12 mb-4" />
            <h3 className="text-4xl font-bold text-[#1a3c2a] mb-2">30+</h3>
            <p className="text-[#2d5d42]">Courses Available</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <Users className="text-[#1a3c2a] w-12 h-12 mb-4" />
            <h3 className="text-4xl font-bold text-[#1a3c2a] mb-2">10,000+</h3>
            <p className="text-[#2d5d42]">Students Enrolled</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <Award className="text-[#1a3c2a] w-12 h-12 mb-4" />
            <h3 className="text-4xl font-bold text-[#1a3c2a] mb-2">95%</h3>
            <p className="text-[#2d5d42]">Success Rate</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center transform transition-transform hover:scale-105">
            <Clock className="text-[#1a3c2a] w-12 h-12 mb-4" />
            <h3 className="text-4xl font-bold text-[#1a3c2a] mb-2">Quick</h3>
            <p className="text-[#2d5d42]">Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;