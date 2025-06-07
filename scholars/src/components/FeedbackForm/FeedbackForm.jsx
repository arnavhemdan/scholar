import React, { useState } from 'react';

const BASE = process.env.REACT_APP_API_BASE_URL;

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    try {
      const response = await fetch(`${BASE}/scholarsItech/scholarsItechfeedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) throw new Error('Submission failed');
      
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    } catch (err) {
      setError('Failed to submit. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-20 bg-[#f9f5f0] rounded-lg shadow-lg border border-[#e0d9c9]">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#1a3c2a]">Feedback Form</h2>
      
      {success ? (
        <div className="bg-[#d4edda] text-[#1a3c2a] p-4 rounded mb-4 border border-[#c3e6cb]">
          Thank you for your feedback! We'll contact you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-[#f8d7da] text-[#721c24] p-3 rounded border border-[#f5c6cb]">
              {error}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1a3c2a] mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#e0d9c9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8b08d] bg-white"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#1a3c2a] mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#e0d9c9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8b08d] bg-white"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#1a3c2a] mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#e0d9c9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8b08d] bg-white"
                placeholder="(123) 456-7890"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#1a3c2a] mb-1">Course *</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-[#e0d9c9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8b08d] bg-white"
              >
                <option value="">Select a course</option>
                <option value="React Fundamentals">React Fundamentals</option>
                <option value="Advanced React">Advanced React</option>
                <option value="Tailwind CSS">Tailwind CSS</option>
                <option value="Fullstack Development">Fullstack Development</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1a3c2a] mb-1">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-[#e0d9c9] rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8b08d] bg-white"
              placeholder="Your feedback here..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#1a3c2a] text-[#e0d9c9] py-2 px-4 rounded-md hover:bg-[#2d5d42] transition duration-300 disabled:bg-[#a3b1a8]"
          >
            {submitting ? 'Submitting...' : 'Submit Feedback'}
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;