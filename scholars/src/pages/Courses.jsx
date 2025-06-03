import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';
import { courses, Course } from '../data/courses';
import { Filter } from 'lucide-react';

const Courses  = () => {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories
  const categories = ['All', ...new Set(courses.map(course => course.category))];

  // Filter courses based on search query and category
  useEffect(() => {
    let result = courses;
    
    // Filter by search query
    if (searchQuery) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    setFilteredCourses(result);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="pt-16 pb-16">
      {/* Courses Header */}
      <div className="bg-blue-600 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Explore Our Courses</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Discover a wide range of courses designed to help you achieve your professional goals
            and expand your knowledge in various fields.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
            <div className="md:hidden mb-2">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center text-gray-700 hover:text-blue-600"
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
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <p className="text-gray-600">
              Showing <span className="font-medium">{filteredCourses.length}</span> courses
            </p>
          </div>
        </div>
        
        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-800 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;