import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Leaf, BookOpen, ChevronDown } from 'lucide-react';

const BASE = process.env.REACT_APP_API_BASE_URL;

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    location: '',
    email: '',
    pincode: '',
    phoneNumber: '',
    operationHours: 'Monday - Friday: 9AM - 6PM\nSaturday: 10AM - 4PM',
    googleMapLink: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [activeFAQ, setActiveFAQ] = useState(null);

  // Fetch contact details on component mount
  useEffect(() => {
    fetch(`${BASE}/scholarsItech/contactDetails`)
      .then(response => response.json())
      .then(data => {
        setContactInfo(data);
      })
      .catch(error => console.error('Error fetching contact info:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend via POST
    fetch(`${BASE}/scholarsItech/ContactQueries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        alert('Thank you for your message. We will get back to you soon!');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
      });
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="pt-16 pb-16 bg-[#f9f5f0]">
      {/* Contact Header */}
      <div className="bg-gradient-to-r from-[#1a3c2a] to-[#2d5d42] py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#c8b08d]"></div>
          <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-[#c8b08d]"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-[#c8b08d]"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center bg-[#c8b08d] bg-opacity-20 px-6 py-2 rounded-full mb-4">
            <Leaf className="h-5 w-5 text-[#f9f5f0] mr-2" />
            <span className="text-[#f9f5f0] font-medium">Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#f9f5f0] mb-4">Get in Touch</h1>
          <p className="text-[#e0e0d1] max-w-2xl mx-auto text-lg">
            Have questions or need more information? Reach out to our team and we'll be happy to help you.
          </p>
        </div>
      </div>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-[#f9f5f0] p-8 rounded-2xl shadow-lg border border-[#e0d9c9]">
              <div className="flex items-center mb-8">
                <div className="bg-[#1a3c2a] p-3 rounded-full mr-4">
                  <BookOpen className="h-8 w-8 text-[#f9f5f0]" />
                </div>
                <h2 className="text-2xl font-bold text-[#1a3c2a]">Scholars Itech Institute</h2>
              </div>
              
              <p className="text-[#3c3c36] mb-8 text-lg">
                We're here to answer any questions you may have about our courses, programs, or the enrollment process. 
                Feel free to reach out to us using any of the contact methods below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#e0d9c9] p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#1a3c2a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a3c2a] mb-1">Our Location</h3>
                    <p className="text-[#3c3c36]">
                      {contactInfo.location} {contactInfo.pincode && `, ${contactInfo.pincode}`}
                    </p>
                  
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#e0d9c9] p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#1a3c2a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a3c2a] mb-1">Phone Number</h3>
                    <a 
                      href={`tel:${contactInfo.phoneNumber}`} 
                      className="text-[#3c3c36] hover:text-[#1a3c2a]"
                    >
                      {contactInfo.phoneNumber}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#e0d9c9] p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#1a3c2a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a3c2a] mb-1">Email Address</h3>
                    <a 
                      href={`mailto:${contactInfo.email}`} 
                      className="text-[#3c3c36] hover:text-[#1a3c2a]"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#e0d9c9] p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-[#1a3c2a]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a3c2a] mb-1">Hours of Operation</h3>
                    <p className="text-[#3c3c36] whitespace-pre-line">
                      {contactInfo.operationHours}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-[#e0d9c9]">
                <h3 className="font-semibold text-[#1a3c2a] mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="bg-[#e0d9c9] p-3 rounded-full hover:bg-[#1a3c2a] transition-colors duration-300"
                    >
                      <Icon className="h-5 w-5 text-[#1a3c2a] hover:text-[#f9f5f0]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0d9c9]">
              <div className="flex items-center mb-6">
                <div className="bg-[#1a3c2a] p-2 rounded-full mr-3">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#1a3c2a]">Send Us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[#3c3c36] mb-2 font-medium">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#e0d9c9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3c2a] focus:border-transparent bg-[#f9f5f0]"

                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#3c3c36] mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#e0d9c9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3c2a] focus:border-transparent bg-[#f9f5f0]"
                      
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-[#3c3c36] mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#e0d9c9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3c2a] focus:border-transparent bg-[#f9f5f0]"

                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-[#3c3c36] mb-2 font-medium">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#e0d9c9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3c2a] focus:border-transparent bg-[#f9f5f0] appearance-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Course Information">Course Information</option>
                      <option value="Admission">Admission</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#3c3c36] mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                        maxLength={150}
                    required
                    className="w-full px-4 py-3 border border-[#e0d9c9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a3c2a] focus:border-transparent bg-[#f9f5f0]"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1a3c2a] to-[#2d5d42] hover:from-[#2d5d42] hover:to-[#1a3c2a] text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-[#1a3c2a] mr-3"></div>
              <h2 className="text-2xl font-bold text-[#1a3c2a]">Find Us On The Map</h2>
              <div className="w-12 h-1 bg-[#1a3c2a] ml-3"></div>
            </div>
            <p className="text-[#3c3c36] max-w-2xl mx-auto text-lg">
              Visit our campus to learn more about our programs and facilities.
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] border-2 border-[#e0d9c9]">
            <iframe 
              src={contactInfo.googleMapLink} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Scholars Itech Institute Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f9f5f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <Leaf className="h-6 w-6 text-[#1a3c2a] mr-2" />
              <h2 className="text-2xl font-bold text-[#1a3c2a]">Frequently Asked Questions</h2>
              <Leaf className="h-6 w-6 text-[#1a3c2a] ml-2 transform rotate-180" />
            </div>
            <p className="text-[#3c3c36] max-w-2xl mx-auto text-lg">
              Find answers to some of the most common questions about our courses and programs.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How much time does it take to learn a particular programming language?",
                answer: "The time depends on the complexity of the language and your prior experience. On average, it takes 2 to 6 months to become comfortable with most languages through consistent practice."
              },
              {
                question: "Will I be able to learn a programming language?",
                answer: "Yes, anyone can learn a programming language with consistent effort and the right resources. Start with a beginner-friendly language and practice regularly."
              },
              {
                question: "Will there be regular classes?",
                answer: "Yes, the institute is only closed on Sundays and the third Saturday of every month."
              },
              {
                question: "How can I get help if I'm having technical issues?",
                answer: "Our technical support team is available during working hours to assist you with any issues you may encounter. You can reach them via whatsapp, phone."
              },
              {
                question: "Are there any prerequisites for your courses?",
                answer: "Prerequisites vary by course. Introductory courses typically have no prerequisites, while advanced programs may require foundational knowledge. Each course page lists specific requirements. If you're unsure, our academic advisors can help determine the best starting point for you."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-[#e0d9c9] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <h3 className="font-semibold text-lg text-[#1a3c2a]">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-[#1a3c2a] transition-transform duration-300 ${
                      activeFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`px-6 pb-6 text-[#3c3c36] transition-all duration-300 ${
                    activeFAQ === index ? 'block' : 'hidden'
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Social media icon components
const Facebook = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.129 22 16.99 22 12z"/>
  </svg>
);

const Instagram = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const Twitter = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
  </svg>
);

const Linkedin = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default Contact;