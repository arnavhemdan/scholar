// TermsOfService.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="bg-[#f9f5f0] min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h1 className="text-3xl font-bold text-[#1a3c2a] mb-6 text-center">Terms of Service</h1>
          <p className="text-[#2d5d42] mb-6 text-center">Effective Date: June 7, 2025</p>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-[#1a3c2a] mb-3">1. Acceptance of Terms</h2>
              <p className="text-[#2d5d42]">
                By accessing or using ScholarsITech Physical Education Platform, you agree to be bound by these Terms of Service. These terms govern your use of our fitness courses, training programs, and educational content.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#1a3c2a] mb-3">2. Account Registration</h2>
              <p className="text-[#2d5d42]">
                To access certain features, you must register an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-[#2d5d42]">
                <li>Provide accurate information about your fitness background</li>
                <li>Maintain the security of your credentials</li>
                <li>Immediately notify us of any unauthorized use</li>
                <li>Be at least 16 years old to use our services</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#1a3c2a] mb-3">3. Physical Education Services</h2>
              <p className="text-[#2d5d42]">
                Our platform provides:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-[#2d5d42]">
                <li>Instructional fitness courses and tutorials</li>
                <li>Personalized workout plans</li>
                <li>Progress tracking tools</li>
                <li>Educational resources on physical health</li>
              </ul>
              <p className="text-[#2d5d42] mt-3 italic">
                Note: Consult with a physician before beginning any new exercise program. We are not medical professionals.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#1a3c2a] mb-3">4. User Responsibilities</h2>
              <p className="text-[#2d5d42]">
                As a user, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-[#2d5d42]">
                <li>Use services only for personal, non-commercial fitness purposes</li>
                <li>Not share access credentials with others</li>
                <li>Not attempt to reverse engineer our platform</li>
                <li>Comply with all safety instructions during physical activities</li>
                <li>Provide accurate health information where required</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#1a3c2a] mb-3">5. Intellectual Property</h2>
              <p className="text-[#2d5d42]">
                All fitness programs, workout videos, educational content, and platform technology are owned by ScholarsITech. You receive a limited license to access content for personal training purposes only.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#1a3c2a] mb-3">6. Payments & Refunds</h2>
              <p className="text-[#2d5d42]">
                Course fees are due upon enrollment. We offer a 14-day refund policy for unused courses. No refunds for partially completed physical training programs.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#1a3c2a] mb-3">7. Liability Disclaimer</h2>
              <p className="text-[#2d5d42]">
                You acknowledge that physical exercise carries inherent risks. ScholarsITech is not liable for:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-[#2d5d42]">
                <li>Personal injuries sustained during training</li>
                <li>Health complications arising from exercise programs</li>
                <li>Incorrect self-assessment of fitness capabilities</li>
                <li>Equipment malfunctions during remote training</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#1a3c2a] mb-3">8. Termination</h2>
              <p className="text-[#2d5d42]">
                We may suspend or terminate accounts for violations of these terms. Upon termination, your right to access physical education materials will immediately cease.
              </p>
            </section>
            
            <div className="pt-6 border-t border-[#e0d9c9]">
              <p className="text-[#2d5d42] text-center">
                Contact us regarding these terms: 
                <a href="mailto:terms@scholarsitechpe.com" className="text-[#1a3c2a] font-semibold ml-1">
                  terms@scholarsitechpe.com
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Link 
            to="/" 
            className="bg-[#1a3c2a] hover:bg-[#2d5d42] text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;