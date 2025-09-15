
import React from 'react';
import { Leaf } from 'lucide-react';

const ContactHeader = () => {
  return (
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
  );
};

export default ContactHeader;