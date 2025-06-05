import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  BookOpen 
} from 'lucide-react';

const BASE = process.env.REACT_APP_API_BASE_URL; // ✅ CRA-compatible


const Footer= () => {
    const [contactInfo, setContactInfo] = useState({
      location: '',
      email: '',
      pincode: '',
      phoneNumber: '',
      operationHours: '',
      googleMapLink: ''
    });
  useEffect(() => {
      fetch(`${BASE}/scholarsItech/contactDetails`)
        .then(response => response.json())
        .then(data => {
          // Assume API returns keys matching the state fields
          setContactInfo(data);
        })
        .catch(error => console.error('Error fetching contact info:', error));
    }, []);

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">EduLearn</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Transforming lives through quality education. Our mission is to provide accessible, 
              innovative learning experiences that empower students to achieve their goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/FeedbackForm" className="text-gray-400 hover:text-white transition-colors">Feedback</Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Popular Courses</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Data Science</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-gray-400">  {contactInfo.location} {contactInfo.pincode && `, ${contactInfo.pincode}`} </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-400">{contactInfo.phoneNumber}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-gray-400">{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Scholars Itech Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;