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
  BookOpen,
  ArrowUp,
  Globe
} from 'lucide-react';

const BASE = process.env.REACT_APP_API_BASE_URL;

const Footer = () => {
  const [contactInfo, setContactInfo] = useState({
    location: '123 Education Street, Learning District',
    email: 'info@edulearn.com',
    pincode: '10001',
    phoneNumber: '+1 (555) 123-4567',
    operationHours: 'Mon-Fri: 9AM - 6PM',
    googleMapLink: '#'
  });

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Fetch contact info from API
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE}/scholarsItech/contactDetails`);
        const data = await response.json();
        setContactInfo(data);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };
    
    fetchData();
    
    // Scroll to top button visibility
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#1a3c2a] text-[#e0d9c9]">
      {/* Back to top button */}
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#c8b08d] hover:bg-[#2d5d42] text-[#1a3c2a] p-3 rounded-full shadow-lg transition-all duration-300 animate-bounce"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info - spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-5">
              <div className="bg-[#2d5d42] p-2 rounded-lg mr-3">
                <BookOpen className="h-8 w-8 text-[#c8b08d]" />
              </div>
              <span className="text-2xl font-bold text-[#e0d9c9]">
                Scholars' Itech
              </span>
            </div>
            <p className="mb-6 leading-relaxed">
              Transforming lives through quality education. Our mission is to provide accessible, 
              innovative learning experiences that empower students to achieve their goals.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/16UxCkvLQc/" className="bg-[#2d5d42] p-3 rounded-full hover:bg-[#c8b08d] transition-all duration-300 group">
                <Facebook className="text-[#e0d9c9] group-hover:text-[#1a3c2a]" size={18} />
              </a>
              <a href="https://www.instagram.com/scholarsitechdoon_?igsh=M3Fva3pobTF1NWcx" className="bg-[#2d5d42] p-3 rounded-full hover:bg-[#c8b08d] transition-all duration-300 group">
                <Instagram className="text-[#e0d9c9] group-hover:text-[#1a3c2a]" size={18} />
              </a>
              <a href="#" className="bg-[#2d5d42] p-3 rounded-full hover:bg-[#c8b08d] transition-all duration-300 group">
                <Twitter className="text-[#e0d9c9] group-hover:text-[#1a3c2a]" size={18} />
              </a>
              <a href="#" className="bg-[#2d5d42] p-3 rounded-full hover:bg-[#c8b08d] transition-all duration-300 group">
                <Linkedin className="text-[#e0d9c9] group-hover:text-[#1a3c2a]" size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 pb-2 border-b border-[#c8b08d] inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/courses", label: "Courses" },
                { path: "/contact", label: "Contact Us" },
                { path: "/FeedbackForm", label: "Feedback" },
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="hover:text-[#c8b08d] transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#c8b08d] rounded-full mr-3"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5 pb-2 border-b border-[#c8b08d] inline-block">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[#2d5d42] p-2 rounded-full mr-3 mt-1">
                  <MapPin className="h-5 w-5 text-[#c8b08d]" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p>
                    {contactInfo.location}, {contactInfo.pincode}
                  </p>
                  
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-[#2d5d42] p-2 rounded-full mr-3 mt-1">
                  <Phone className="h-5 w-5 text-[#c8b08d]" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href={`tel:${contactInfo.phoneNumber}`} 
                    className="hover:text-[#c8b08d]"
                  >
                    {contactInfo.phoneNumber}
                  </a>
                  <p className="text-sm mt-1">{contactInfo.operationHours}</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-[#2d5d42] p-2 rounded-full mr-3 mt-1">
                  <Mail className="h-5 w-5 text-[#c8b08d]" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="hover:text-[#c8b08d]"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-[#2d5d42] pt-6 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Scholars Itech Institute. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href='PrivacyPolicy' className="hover:text-[#c8b08d] text-sm">Privacy Policy</a>
              <a href='TermsOfService' className="hover:text-[#c8b08d] text-sm">Terms of Service</a>
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;