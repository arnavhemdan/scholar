// FAQSection.js
import React, { useState } from 'react';
import { Leaf, ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How much time does it take to learn a particular programming language?",
      answer: "The time depends on the complexity of the language and your prior experience. On average, it takes 2 to 6 months to become comfortable with most languages through consistent practice."
    },
    {
      question: "Will I be able to learn a programming language?",
      answer: "Yes, anyone can learn a programming language with consistent effort and the right resources. Start with a beginner-friendly language and practice regularly."
    },
    {
      question: "Will there be regular classes?",
      answer: "Yes, the institute is only closed on Sundays and the third Saturday of every month."
    },
    {
      question: "How can I get help if I'm having technical issues?",
      answer: "Our technical support team is available during working hours to assist you with any issues you may encounter. You can reach them via whatsapp, phone."
    },
    {
      question: "Are there any prerequisites for your courses?",
      answer: "Prerequisites vary by course. Introductory courses typically have no prerequisites, while advanced programs may require foundational knowledge. Each course page lists specific requirements. If you're unsure, our academic advisors can help determine the best starting point for you."
    }
  ];

  return (
    <section className="py-16 bg-[#f9f5f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <Leaf className="h-6 w-6 text-[#1a3c2a] mr-2" />
            <h2 className="text-2xl font-bold text-[#1a3c2a]">Frequently Asked Questions</h2>
            <Leaf className="h-6 w-6 text-[#1a3c2a] ml-2 transform rotate-180" />
          </div>
          <p className="text-[#3c3c36] max-w-2xl mx-auto text-lg">
            Find answers to some of the most common questions about our courses and programs.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-[#e0d9c9] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <h3 className="font-semibold text-lg text-[#1a3c2a]">{faq.question}</h3>
                <ChevronDown 
                  className={`h-5 w-5 text-[#1a3c2a] transition-transform duration-300 ${
                    activeFAQ === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`px-6 pb-6 text-[#3c3c36] transition-all duration-300 ${
                  activeFAQ === index ? 'block' : 'hidden'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;