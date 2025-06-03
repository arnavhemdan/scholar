import React from 'react';
import Carousel from '../components/Carousel';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { GraduationCap, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Get featured courses only
  const featuredCourses = courses.filter(course => course.featured);

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

      {/* Featured Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular courses designed to help you advance your career and expand your knowledge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Web Development Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The Web Development Bootcamp completely transformed my career. Within three months of completing the course, I landed my dream job as a front-end developer!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Michael Smith</h4>
                  <p className="text-sm text-gray-500">Data Science Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The instructors were incredibly knowledgeable and supportive. The hands-on projects gave me real-world experience that I could showcase in my portfolio."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Lisa Chen</h4>
                  <p className="text-sm text-gray-500">Digital Marketing Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The Digital Marketing Masterclass provided me with the skills and confidence to start my own agency. I now have clients worldwide and couldn't be happier with my career choice!"
              </p>
            </div>
          </div>
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