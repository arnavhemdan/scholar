// FeaturedCourses.js
import React, { useState, useEffect } from 'react';
import CourseCard from '../Course/CourseCard';
import { Link } from 'react-router-dom';
import EnrollmentForm from '../EnrollmentForm/EnrollmentForm';
import  SkeletonCard  from '../../features/SkeletonCard';
const BASE = process.env.REACT_APP_API_BASE_URL;

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrollmentCourse, setEnrollmentCourse] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${BASE}/scholarsItech/getCourses`);
        if (!res.ok) throw new Error('Failed to fetch courses');
        const data = await res.json();
        setCourses(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);
   
  const featuredCourseNames = ['Complete C Bootcamp', 'Complete Typing Course', 'Complete Tally Course', 'Complete Web Development Bootcamp'];
  console.log(courses);
  const featuredCourses = courses.filter(course => 
    featuredCourseNames.includes(course.title)
  );

  const handleEnrollmentSubmit = (enrollmentData) => {
    console.log('Enrollment submitted:', enrollmentData);
    fetch(`${BASE}/scholarsItech/enrollments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enrollmentData)
    });

  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a3c2a] mb-4">Featured Courses</h2>
          <p className="text-[#2d5d42] max-w-2xl mx-auto">
            Discover our most popular courses designed to help you advance your career.
          </p>
        </div>
        
        {loading ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array(4).fill().map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
) : error ? (
  <div className="text-center text-red-600 py-10">
    <p>Error: {error}</p>
  </div>
) : (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {featuredCourses.map(course => (
        <CourseCard 
          key={course._id || course.id} 
          course={course}
          onEnrollClick={setEnrollmentCourse}
        />            
      ))}
    </div>
    {enrollmentCourse && (
      <EnrollmentForm 
        course={enrollmentCourse}
        onClose={() => setEnrollmentCourse(null)}
        onSubmit={handleEnrollmentSubmit}
      />
    )}
    <div className="mt-12 text-center">
      <Link 
        to="/courses" 
        className="inline-block bg-[#1a3c2a] hover:bg-[#2d5d42] text-white font-medium py-3 px-6 rounded-md transition-colors"
      >
        View All Courses
      </Link>
    </div>
  </>
)}

      </div>
    </section>
  );
};

export default FeaturedCourses;