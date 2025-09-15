
import React from 'react';
import { MapPin, Phone, Mail, Clock, BookOpen } from 'lucide-react';
import { Facebook, Instagram, Twitter, Linkedin } from './SocialIcons';

const ContactInfo = ({ contactInfo }) => {
  return (
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
  );
};

export default ContactInfo;