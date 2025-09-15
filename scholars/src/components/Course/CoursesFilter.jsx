// CoursesFilter.js
import React from 'react';
import { Filter } from 'lucide-react';

const CoursesFilter = ({ 
  courses, 
  selectedCategory, 
  setSelectedCategory, 
  showFilters, 
  setShowFilters 
}) => {
  const categories = ['All', ...new Set(courses.map(course => course.category))];

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
      <div className="md:hidden mb-2">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center text-[#1a3c2a] hover:text-[#2d5d42]"
        >
          <Filter className="h-5 w-5 mr-1" />
          <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
        </button>
      </div>

      <div className={`${showFilters ? 'block' : 'hidden'} md:block mb-4 md:mb-0 w-full md:w-auto`}>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
              className={`px-4 py-2 rounded-full text-sm ${
                (category === 'All' && !selectedCategory) || selectedCategory === category
                  ? 'bg-[#2d5d42] text-white'
                  : 'bg-[#e0d9c9] text-[#1a3c2a] hover:bg-[#d0c9b9]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesFilter;