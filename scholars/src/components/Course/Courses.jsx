import React, { useState, useEffect } from 'react';
import CourseCard from '../Course/CourseCard';
import SearchBar from './SearchBar';
import EnrollmentForm from '../EnrollmentForm/EnrollmentForm';
import { Filter,Leaf } from 'lucide-react';

const BASE = process.env.REACT_APP_API_BASE_URL;

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrollmentCourse, setEnrollmentCourse] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${BASE}/scholarsItech/getCourses`);
        if (!res.ok) throw new Error('Failed to fetch courses');
        const data = await res.json();
        setCourses(data);
        setFilteredCourses(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    let result = courses;

    if (searchQuery) {
      result = result.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter(course => course.category === selectedCategory);
    }

    setFilteredCourses(result);
  }, [searchQuery, selectedCategory, courses]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleEnrollmentSubmit = (enrollmentData) => {
    console.log('Enrollment submitted:', enrollmentData);
    // Send enrollment data to backend
    // fetch(`${BASE}/enrollments`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(enrollmentData)
    // })
    setEnrollmentCourse(null); // Close form after submission
  };

  const categories = ['All', ...new Set(courses.map(course => course.category))];

  if (loading) return <div className="p-8 text-center text-[#1a3c2a]">Loading courses...</div>;
  if (error) return <div className="p-8 text-center text-red-600">Error: {error}</div>;

  return (
    <div className="pt-16 pb-16 bg-[#f9f5f0] relative">
      {/* Header */}
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />

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
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard 
              key={course._id || course.id} 
              course={course}
              onEnrollClick={setEnrollmentCourse}
            />
          ))}
        </div>
      </div>

      {/* Enrollment Form Modal */}
      {enrollmentCourse && (
        <EnrollmentForm 
          course={enrollmentCourse}
          onClose={() => setEnrollmentCourse(null)}
          onSubmit={handleEnrollmentSubmit}
        />
      )}
    </div>
  );
};

export default Courses;