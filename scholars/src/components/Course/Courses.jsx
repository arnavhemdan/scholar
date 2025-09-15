import React, { useState, useEffect } from 'react';
import CourseCard from '../Course/CourseCard';
import SearchBar from './SearchBar';
import EnrollmentForm from '../EnrollmentForm/EnrollmentForm';
import CoursesHeader from './CoursesHeader';
import CoursesFilter from './CoursesFilter';
import { Filter, Leaf } from 'lucide-react';

const BASE = process.env.REACT_APP_API_BASE_URL;

// Main Courses component
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
        const params = new URLSearchParams({
          search: searchQuery,
          category: selectedCategory || '',
          page: 1,
          limit: 12
        });

        const res = await fetch(`${BASE}/scholarsItech/getCourses?${params}`);
        if (!res.ok) throw new Error('Failed to fetch courses');
        const result = await res.json();
        
        setCourses(Array.isArray(result) ? result : []);        
        setFilteredCourses(Array.isArray(result) ? result : []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, [searchQuery, selectedCategory]);

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

    fetch(`${BASE}/scholarsItech/enrollments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enrollmentData)
    });
    setEnrollmentCourse(null);
  };

  if (loading) return <div className="p-8 text-center text-[#1a3c2a]">Loading courses...</div>;
  if (error) return <div className="p-8 text-center text-red-600">Error: {error}</div>;

  return (
    <div className="pt-16 pb-16 bg-[#f9f5f0] relative">
      <CoursesHeader />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
          
          <CoursesFilter 
            courses={courses}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.isArray(filteredCourses) && filteredCourses.map(course => (
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