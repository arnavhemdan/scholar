// PrivacyPolicy.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#f9f5f0] min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h1 className="text-3xl font-bold text-[#1a3c2a] mb-6 text-center">Privacy Policy</h1>
          <p className="text-[#2d5d42] mb-6 text-center">Last Updated: June 7, 2025</p>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-[#1a3c2a] mb-3">1. Introduction</h2>
              <p className="text-[#2d5d42]">
                Welcome to ScholarsITech Physical Education Platform. We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information when you use our physical education services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#1a3c2a] mb-3">2. Information We Collect</h2>
              <p className="text-[#2d5d42]">
                We may collect the following information related to your physical education journey:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-[#2d5d42]">
                <li>Personal identification (name, email, phone number)</li>
                <li>Health and fitness assessment data</li>
                <li>Workout progress and performance metrics</li>
                <li>Payment information for course enrollment</li>
                <li>Device and usage data when accessing our platform</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#1a3c2a] mb-3">3. How We Use Your Information</h2>
              <p className="text-[#2d5d42]">
                Your information helps us:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-[#2d5d42]">
                <li>Create personalized fitness programs</li>
                <li>Track your physical education progress</li>
                <li>Process payments for courses</li>
                <li>Improve our training methodologies</li>
                <li>Communicate important service updates</li>
                <li>Ensure safety during physical activities</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#1a3c2a] mb-3">4. Data Security</h2>
              <p className="text-[#2d5d42]">
                We implement industry-standard security measures to protect your sensitive health and fitness data:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-[#2d5d42]">
                <li>Encryption of all stored personal data</li>
                <li>Regular security audits of our systems</li>
                <li>Restricted access to sensitive health information</li>
                <li>Secure transmission protocols (SSL/TLS)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#1a3c2a] mb-3">5. Your Rights</h2>
              <p className="text-[#2d5d42]">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-[#2d5d42]">
                <li>Access and request copies of your fitness data</li>
                <li>Request correction of inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-[#1a3c2a] mb-3">6. Changes to This Policy</h2>
              <p className="text-[#2d5d42]">
                We may update this policy periodically. Significant changes will be communicated through our platform or via email.
              </p>
            </section>
            
            <div className="pt-6 border-t border-[#e0d9c9]">
              <p className="text-[#2d5d42] text-center">
                For questions about this privacy policy, contact us at: 
                <a href="mailto:privacy@scholarsitechpe.com" className="text-[#1a3c2a] font-semibold ml-1">
                  privacy@scholarsitechpe.com
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

export default PrivacyPolicy;