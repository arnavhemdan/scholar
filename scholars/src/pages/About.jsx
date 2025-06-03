import React from 'react';
import { BookOpen, Users, Award, MessageSquare } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16 pb-16">
      {/* About Header */}
      <div className="bg-blue-600 py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About EduLearn</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Discover our mission, values, and the people behind our commitment to transforming lives through education.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, EduLearn began with a simple mission: to make quality education accessible to everyone, 
                regardless of their background or location. What started as a small team of passionate educators has grown 
                into a global community of learners and instructors.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've helped thousands of students achieve their personal and professional goals through 
                our comprehensive courses, expert instructors, and supportive learning environment.
              </p>
              <p className="text-gray-600">
                Today, EduLearn is recognized as a leader in online education, constantly innovating to provide the best 
                learning experience for our students and helping them navigate an ever-changing professional landscape.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="EduLearn Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape the experience we provide to our students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-600">
              <div className="text-blue-600 mb-4">
                <BookOpen className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest quality education through rigorous curriculum design and expert instruction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-600">
              <div className="text-blue-600 mb-4">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Inclusivity</h3>
              <p className="text-gray-600">
                We believe in creating an inclusive learning environment where diversity is celebrated and all perspectives are valued.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-600">
              <div className="text-blue-600 mb-4">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our teaching methods and content to stay at the forefront of educational advancements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-600">
              <div className="text-blue-600 mb-4">
                <MessageSquare className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-600">
                We provide comprehensive support to our students throughout their learning journey to ensure their success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of dedicated professionals is committed to providing the best educational experience for our students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Dr. Robert Chen" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Robert Chen</h3>
                <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
                <p className="text-gray-600 mb-4">
                  With over 20 years of experience in education, Dr. Chen founded EduLearn with the vision of making quality education accessible to all.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Dr. Sarah Williams" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Dr. Sarah Williams</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Academic Officer</p>
                <p className="text-gray-600 mb-4">
                  Dr. Williams oversees our academic programs and ensures that our curriculum meets the highest standards of excellence.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="James Anderson" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">James Anderson</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 mb-4">
                  James leads our technology team, ensuring that our learning platform provides a seamless and engaging experience for students.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Growing Community</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Start your learning journey with EduLearn and join our community of students and professionals
            who are transforming their lives through education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-md shadow-lg transition-all">
              Browse Courses
            </button>
            <button className="bg-transparent hover:bg-blue-700 text-white border-2 border-white font-bold py-3 px-6 rounded-md transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;