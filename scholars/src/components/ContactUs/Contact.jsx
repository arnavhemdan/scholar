// Contact.js
import React, { useState, useEffect } from 'react';
import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import MapSection from './MapSection';
import FAQSection from './FAQSection';

const BASE = process.env.REACT_APP_API_BASE_URL;

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    location: '1st Floor, Opposite Himalayan Drug Company, Near Raja Ram Mohan Roy School, India, Saharanpur Road, Dehradun, Uttarakhand',
    email: 'scholarsofficial2006@gmail.com',
    pincode: '248002',
    phoneNumber: 'P9997232314',
    operationHours: 'Monday - Saturday: 10AM - 8PM Sunday: Closed',
    googleMapLink: ''
  });

  // Fetch contact details on component mount
  useEffect(() => {
    fetch(`${BASE}/scholarsItech/contactDetails`)
      .then(response => response.json())
      .then(data => {
        setContactInfo(data);
      })
      .catch(error => console.error('Error fetching contact info:', error));
  }, []);

  return (
    <div className="pt-16 pb-16 bg-[#f9f5f0]">
      <ContactHeader />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo contactInfo={contactInfo} />
          <ContactForm />
        </div>
      </div>

      <MapSection contactInfo={contactInfo} />
      <FAQSection />
    </div>
  );
};

export default Contact;