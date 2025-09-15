import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

const EnrollmentForm = ({ course, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await onSubmit({
      ...formData,
      courseId: course?._id,
      courseTitle: course?.title
    });
    setIsSubmitted(true);
  } catch (error) {
    console.error("Submission failed:", error);
  }
};

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
          <div className="flex justify-between items-center border-b p-4">
            <h2 className="text-xl font-bold text-[#1a3c2a]">Enrollment Submitted</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6 text-center">
            <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Thank You for Your Enrollment!
            </h3>
            <p className="text-gray-600 mb-4">
              We've received your enrollment request for <strong>{course.title}</strong>. 
              Our team will contact you shortly at <strong>{formData.email}</strong> to complete the process.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#1a3c2a] text-white rounded-md hover:bg-[#2d5d42] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-bold text-[#1a3c2a]">Enroll in {course.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4 border-b">
          <div className="flex justify-between">
            <span className="text-gray-600">Duration:</span>
            <span className="font-bold">{course.duration}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a3c2a]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a3c2a]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a3c2a]"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
              Experience
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a3c2a]"
            >
              <option value="">Select your experience</option>
              <option value="newbie">Newbie</option>
              <option value="some basic knowledge">Some Basic Knowledge</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              maxLength={150}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a3c2a]"
            ></textarea>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#1a3c2a] text-white rounded-md hover:bg-[#2d5d42] transition-colors"
            >
              Submit Enrollment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;