// MapSection.js
import React from 'react';

const MapSection = ({ contactInfo }) => {
  return (
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
  );
};

export default MapSection;