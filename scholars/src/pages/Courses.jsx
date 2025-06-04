import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';
import { Filter } from 'lucide-react';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch courses from API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch('http://localhost:2000/scholarsItech/getCourses'); // Update with your actual API endpoint
        if (!res.ok) throw new Error('Failed to fetch courses');
        const data = await res.json();
        console.log(data);
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

  // Filter logic
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

  const categories = ['All', ...new Set(courses.map(course => course.category))];

  if (loading) return <div className="p-8 text-center">Loading courses...</div>;
  if (error) return <div className="p-8 text-center text-red-600">Error: {error}</div>;

  return (
    <div className="pt-16 pb-16">
      {/* Header */}
      <div className="bg-blue-600 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Explore Our Courses</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
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
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <CourseCard key={course._id || course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
