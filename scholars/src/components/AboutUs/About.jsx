import React from 'react';
import { BookOpen, Users, Award, MessageSquare, Code, Leaf, ChevronRight, HeartHandshake, UserRound, Star, GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#f9f5f0]">
      {/* About Header */}
      <div className="bg-gradient-to-r from-[#1a3c2a] to-[#2d5d42] py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#c8b08d]"></div>
          <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-[#c8b08d]"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-[#c8b08d]"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center bg-[#c8b08d] bg-opacity-20 px-6 py-2 rounded-full mb-4">
            <Leaf className="h-5 w-5 text-[#f9f5f0] mr-2" />
            <span className="text-[#f9f5f0] font-medium">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#f9f5f0] mb-4">About Scholars Itech</h1>
          <p className="text-[#e0e0d1] max-w-2xl mx-auto text-lg">
            Discover our mission, values, and the people behind our commitment to transforming lives through education.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center mb-4">
                <div className="w-8 h-1 bg-[#1a3c2a] mr-3"></div>
                <h2 className="text-3xl font-bold text-[#1a3c2a]">Our Story</h2>
              </div>
              <p className="text-[#3c3c36] mb-6 text-lg">
                Scholars ITech Computer Training Institute (SIT), under the aegis of Scholars’ Educational Society, has been a prominent player in the field of Information Technology education since 2006 in Dehradun. Co-founded and run by Ms. Nishat and Ms. Nigar, SIT is dedicated to providing quality short-term vocational courses. These include Computer Basics, C, C++, Java, .Net Technology, Android, DBMS, among others. With a strong foundation in both theoretical and practical learning, the institute focuses on equipping students with industry-relevant skills to help them achieve meaningful employment in reputable organizations.
              </p>
              <p className="text-[#3c3c36] mb-6 text-lg">
                Over the years, we've helped thousands of students achieve their personal and professional goals through 
                our comprehensive courses, expert instructors, and supportive learning environment.
              </p>
              <p className="text-[#3c3c36] text-lg">
                Today, Scholars Itech is recognized as a leader in tech education, constantly innovating to provide the best 
                learning experience for our students and helping them navigate an ever-changing professional landscape.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center bg-[#e0d9c9] px-4 py-2 rounded-full">
                  <div className="text-2xl font-bold text-[#1a3c2a] mr-2">15+</div>
                  <div className="text-[#3c3c36]">Years of Excellence</div>
                </div>
                <div className="flex items-center bg-[#e0d9c9] px-4 py-2 rounded-full">
                  <div className="text-2xl font-bold text-[#1a3c2a] mr-2">50K+</div>
                  <div className="text-[#3c3c36]">Students Trained</div>
                </div>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-[#e0d9c9]">
                <img 
                  src="https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Scholars Itech Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#1a3c2a] p-4 rounded-lg shadow-lg text-white">
                <div className="text-3xl font-bold">1999</div>
                <div className="text-[#c8b08d]">Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women Empowerment Section */}
      <section className="py-16 bg-[#f0ebe3]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-[#e0d9c9]">
                <img 
                  src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Women Empowerment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#1a3c2a] p-4 rounded-lg shadow-lg text-white">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-[#c8b08d]">Women-Led</div>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center mb-4">
                <div className="w-8 h-1 bg-[#1a3c2a] mr-3"></div>
                <h2 className="text-3xl font-bold text-[#1a3c2a]">Women-Led Organization</h2>
              </div>
              <p className="text-[#3c3c36] mb-6 text-lg">
                Scholars Itech takes pride in being a 100% women-led organization, founded and managed by <span className="font-semibold">Ms. Nishat and Ms. Nigar</span>. This unique leadership structure reflects our deep commitment to women empowerment in the technology sector.
              </p>
              <p className="text-[#3c3c36] mb-6 text-lg">
                We believe that empowering women through technical education creates a ripple effect of positive change in families, communities, and industries. Our leadership serves as living proof that women can excel in technology fields and lead successful educational institutions.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-[#e0d9c9]">
                  <div className="bg-[#e0d9c9] p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <UserRound className="h-6 w-6 text-[#1a3c2a]" />
                  </div>
                  <h3 className="font-bold text-[#1a3c2a] mb-1">Female Leadership</h3>
                  <p className="text-sm text-[#3c3c36]">100% women-led management team</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-[#e0d9c9]">
                  <div className="bg-[#e0d9c9] p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-6 w-6 text-[#1a3c2a]" />
                  </div>
                  <h3 className="font-bold text-[#1a3c2a] mb-1">Skill Development</h3>
                  <p className="text-sm text-[#3c3c36]">Empowering women with technical skills</p>
                </div>
                
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-[#e0d9c9]">
                  <div className="bg-[#e0d9c9] p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-6 w-6 text-[#1a3c2a]" />
                  </div>
                  <h3 className="font-bold text-[#1a3c2a] mb-1">Career Advancement</h3>
                  <p className="text-sm text-[#3c3c36]">Creating pathways to leadership roles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-[#f9f5f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <Leaf className="h-6 w-6 text-[#1a3c2a] mr-2" />
              <h2 className="text-3xl font-bold text-[#1a3c2a]">Our Core Values</h2>
              <Leaf className="h-6 w-6 text-[#1a3c2a] ml-2 transform rotate-180" />
            </div>
            <p className="text-[#3c3c36] max-w-2xl mx-auto text-lg">
              These principles guide everything we do and shape the experience we provide to our students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#1a3c2a] hover:shadow-xl transition-all duration-300">
              <div className="bg-[#e0d9c9] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-[#1a3c2a]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a3c2a] mb-2">Excellence</h3>
              <p className="text-[#3c3c36]">
                We are committed to delivering the highest quality education through rigorous curriculum design and expert instruction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#1a3c2a] hover:shadow-xl transition-all duration-300">
              <div className="bg-[#e0d9c9] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#1a3c2a]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a3c2a] mb-2">Inclusivity</h3>
              <p className="text-[#3c3c36]">
                We believe in creating an inclusive learning environment where diversity is celebrated and all perspectives are valued.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#1a3c2a] hover:shadow-xl transition-all duration-300">
              <div className="bg-[#e0d9c9] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-[#1a3c2a]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a3c2a] mb-2">Innovation</h3>
              <p className="text-[#3c3c36]">
                We continuously evolve our teaching methods and content to stay at the forefront of educational advancements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#1a3c2a] hover:shadow-xl transition-all duration-300">
              <div className="bg-[#e0d9c9] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-[#1a3c2a]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a3c2a] mb-2">Support</h3>
              <p className="text-[#3c3c36]">
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
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-[#1a3c2a] mr-3"></div>
              <h2 className="text-3xl font-bold text-[#1a3c2a]">Meet Our Leadership Team</h2>
              <div className="w-12 h-1 bg-[#1a3c2a] ml-3"></div>
            </div>
            <p className="text-[#3c3c36] max-w-2xl mx-auto text-lg">
              Our team of dedicated professionals is committed to providing the best educational experience for our students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e0d9c9] hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Ms. Nishat " 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a3c2a] mb-1">Ms. Nishat </h3>
                <p className="text-[#2d5d42] font-medium mb-3">President</p>
                <p className="text-[#3c3c36] mb-4">
                  Ms. Nishat began her career in the IT education sector in 1999 as a Lab Assistant with Aptech Computers in Kanpur. After relocating to Dehradun following her father's retirement, she continued her journey with Aptech Computers, Dehradun, where she served as a Senior Faculty until 2006. Her experience in teaching and curriculum development laid a strong foundation for SIT. Motivated by a desire to create a more impactful learning environment, she co-founded SIT to empower students with practical skills and quality education in Information Technology.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="bg-[#e0d9c9] p-2 rounded-full hover:bg-[#1a3c2a] transition-colors">
                    <Linkedin className="h-5 w-5 text-[#1a3c2a] hover:text-white" />
                  </a>
                  <a href="#" className="bg-[#e0d9c9] p-2 rounded-full hover:bg-[#1a3c2a] transition-colors">
                    <Twitter className="h-5 w-5 text-[#1a3c2a] hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e0d9c9] hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Ms. Nigar" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a3c2a] mb-1">Ms. Nigar </h3>
                <p className="text-[#2d5d42] font-medium mb-3">Chairman</p>
                <p className="text-[#3c3c36] mb-4">
                  Ms. Nigar brings a rich and diverse professional background to SIT, blending administrative experience with public service. Her career began in 2003 as a Customer Care Executive with Airtel. She then worked as an Administrative Assistant and External Monitor with the WHO – NPSP Programme (2004–2006), contributing to the global polio eradication mission. From 2006 to 2009, she served as Executive Assistant at the Uttarakhand Health and Family Welfare Society under the NRHM program. She further took on key roles as Administrative Officer with the USAID-funded Futures Group International for the State AIDS Control Society, and later as Specialist (Poverty Management) in the JnNURM project under the Department of Urban Development. Her leadership and management experience continue to shape SIT's vision and operations.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="bg-[#e0d9c9] p-2 rounded-full hover:bg-[#1a3c2a] transition-colors">
                    <Linkedin className="h-5 w-5 text-[#1a3c2a] hover:text-white" />
                  </a>
                  <a href="#" className="bg-[#e0d9c9] p-2 rounded-full hover:bg-[#1a3c2a] transition-colors">
                    <Twitter className="h-5 w-5 text-[#1a3c2a] hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-16 bg-[#f0ebe3]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-[#1a3c2a] mr-2" />
              <h2 className="text-3xl font-bold text-[#1a3c2a]">Meet Our Developers</h2>
              <Code className="h-6 w-6 text-[#1a3c2a] ml-2" />
            </div>
            <p className="text-[#3c3c36] max-w-2xl mx-auto text-lg">
              The talented developers who bring our learning platform to life with innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Developer 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#e0d9c9] p-8 flex flex-col md:flex-row items-center hover:shadow-xl transition-all duration-300">
              <img
                src="/images/arnav.jpg"
                alt="Arnav Hemdan"
                className="rounded-xl w-24 h-24 mr-6 object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-[#1a3c2a] mb-1">Arnav Hemdan</h3>
                <p className="text-[#2d5d42] font-medium mb-3">FullStack Developer</p>
                <p className="text-[#3c3c36] mb-4">
                  Arnav specializes in creating intuitive user interfaces with React, CSS frameworks,Node and MongoDB. 
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="bg-[#e0d9c9] p-2 rounded-full hover:bg-[#1a3c2a] transition-colors">
                    <Github className="h-5 w-5 text-[#1a3c2a] hover:text-white" />
                  </a>
                  <a href="#" className="bg-[#e0d9c9] p-2 rounded-full hover:bg-[#1a3c2a] transition-colors">
                    <Linkedin className="h-5 w-5 text-[#1a3c2a] hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Developer 2 */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#e0d9c9] p-8 flex flex-col md:flex-row items-center hover:shadow-xl transition-all duration-300">
              <img
                src="/images/ayush.jpg"
                alt="Ayush Balodhi"
                className="rounded-xl w-24 h-24 mr-6 object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-[#1a3c2a] mb-1">Ayush Balodhi</h3>
                <p className="text-[#2d5d42] font-medium mb-3">Backend Developer</p>
                <p className="text-[#3c3c36] mb-4">
                  Ayush builds robust backend systems with Node.js and manages our database infrastructure.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="bg-[#e0d9c9] p-2 rounded-full hover:bg-[#1a3c2a] transition-colors">
                    <Github className="h-5 w-5 text-[#1a3c2a] hover:text-white" />
                  </a>
                  <a href="#" className="bg-[#e0d9c9] p-2 rounded-full hover:bg-[#1a3c2a] transition-colors">
                    <Linkedin className="h-5 w-5 text-[#1a3c2a] hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1a3c2a] to-[#2d5d42]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Growing Community</h2>
            <p className="text-[#e0e0d1] mb-8 text-lg">
              Start your learning journey with Scholars Itech and join our community of students and professionals
              who are transforming their lives through education.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-[#c8b08d] hover:bg-[#b89e7a] text-[#1a3c2a] font-bold py-3 px-6 rounded-full shadow-lg transition-all flex items-center justify-center">
                Browse Courses <ChevronRight className="ml-2" />
              </button>
              <button className="bg-transparent hover:bg-[#2d5d42] text-white border-2 border-[#c8b08d] font-bold py-3 px-6 rounded-full transition-all flex items-center justify-center">
                Contact Us <MessageSquare className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Social media icon components
const Linkedin = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const Twitter = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
  </svg>
);

const Github = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default About;