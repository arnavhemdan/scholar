
import Carousel from '../Carousel/Carousel';
import CourseCard from '../Course/CourseCard';
import React, { useState, useEffect } from 'react';
import { GraduationCap, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
const BASE = process.env.REACT_APP_API_BASE_URL; 
const Home = () => {
   const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);


    const [testimonials, setTestimonials] = useState([]);
  const [testimonialsLoading, setTestimonialsLoading] = useState(true);
  const [testimonialsError, setTestimonialsError] = useState(null);

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
    const featuredCourses = courses.slice(0, 4);
   
      useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setTestimonialsLoading(true);
        const res = await fetch(`${BASE}/scholarsItech/getscholarsItechStudents`);
        if (!res.ok) throw new Error('Failed to fetch testimonials');
        const data = await res.json();
        setTestimonials(data);
        setTestimonialsLoading(false);
      } catch (err) {
        setTestimonialsError(err.message);
        setTestimonialsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);



  return (
    <div>
      {/* Hero Carousel */}
      <Carousel />

      {/* Stats Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center transform transition-transform hover:scale-105">
              <GraduationCap className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600">Courses Available</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center transform transition-transform hover:scale-105">
              <Users className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">10,000+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center transform transition-transform hover:scale-105">
              <Award className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center transform transition-transform hover:scale-105">
              <Clock className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">24/7</h3>
              <p className="text-gray-600">Learning Support</p>
            </div>
          </div>
        </div>
      </section>

        <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular courses designed to help you advance your career.
            </p>
          </div>
          
          {loading ? (
            <div className="text-center py-10">
              <p>Loading courses...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-10">
              <p>Error: {error}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {featuredCourses.map(course => (
                  <CourseCard key={course._id} course={course} />
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Link 
                  to="/courses" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  View All Courses
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

           {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our students about how our courses have transformed their careers and lives.
            </p>
          </div>
          
          {testimonialsLoading ? (
            <div className="text-center py-10">
              <p>Loading testimonials...</p>
            </div>
          ) : testimonialsError ? (
            <div className="text-center text-red-500 py-10">
              <p>Error: {testimonialsError}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map(testimonial => (
                <div key={testimonial._id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image || "https://via.placeholder.com/150"} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/150";
                      }}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.course || "Student"}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonial.message}"
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of students who have transformed their careers with our industry-recognized courses.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-md shadow-lg transition-all transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;