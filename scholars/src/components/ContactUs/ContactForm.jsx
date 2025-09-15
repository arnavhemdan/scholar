
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(
        (result) => {
          alert("Message sent successfully!");

          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });

          setIsSubmitting(false);
        },
        (error) => {
          alert("Failed to send the message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
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
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-[#1a3c2a] to-[#2d5d42] hover:from-[#2d5d42] hover:to-[#1a3c2a] text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <Send className="h-5 w-5 mr-2" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;