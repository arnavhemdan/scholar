// Home.js
import Carousel from '../Carousel/Carousel';
import StatsSection from './StatsSection';
import FeaturedCourses from './FeaturedCourses';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

const Home = () => {
  return (
    <div className="bg-[#f9f5f0]">
      <Carousel />
      <StatsSection />
      <FeaturedCourses />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;