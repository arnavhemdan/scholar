// TestimonialsSection.js
import React, { useState, useEffect } from 'react';

const BASE = process.env.REACT_APP_API_BASE_URL;

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${BASE}/scholarsItech/getscholarsItechStudents`);
        if (!res.ok) throw new Error('Failed to fetch testimonials');
        const data = await res.json();
        setTestimonials(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="py-16 bg-[#e0d9c9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a3c2a] mb-4">What Our Students Say</h2>
          <p className="text-[#2d5d42] max-w-2xl mx-auto">
            Hear from our students about how our courses have transformed their careers and lives.
          </p>
        </div>
        
        {loading ? (
          <div className="text-center py-10 text-[#1a3c2a]">
            <p>Loading testimonials...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-600 py-10">
            <p>Error: {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 8).map(testimonial => (
              <div key={testimonial._id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src={`${BASE}/${testimonial.image}`} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    onError={(e) => {
                      e.target.onerror = null;
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-[#1a3c2a]">{testimonial.name}</h4>
                    <p className="text-sm text-[#2d5d42]">{testimonial.course || "Student"}</p>
                  </div>
                </div>
                <p className="text-[#2d5d42] italic">
                  "{testimonial.message}"
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;