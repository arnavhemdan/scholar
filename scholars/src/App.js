import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/AboutUs/About.jsx';
import Courses from './components/Course/Courses.jsx';
import Contact from './components/ContactUs/Contact.jsx';
import FeedbackForm from './components/FeedbackForm/FeedbackForm.jsx'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.jsx'; 
import TermsOfService from './components/TermsOfService/TermsOfService.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes> 
            <Route path="/" element={<Home />} />
          
            <Route path="/about" element={<><ScrollToTop /> <About /></>} />
            <Route path="/courses" element={ <> <ScrollToTop /> <Courses /></>} />
            <Route path="/contact" element={<> <ScrollToTop /> <Contact /></>} />
            <Route path="/FeedbackForm" element={<> <ScrollToTop /> <FeedbackForm /></>} />
            <Route path="/PrivacyPolicy" element={<> <ScrollToTop /> <PrivacyPolicy /></>} />
            <Route path="/TermsOfService" element={<> <ScrollToTop /> <TermsOfService /></>} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;