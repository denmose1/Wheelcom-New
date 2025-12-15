
import React from 'react';

// Sibling imports (Hero, Intro, etc., are in the same /Components/ folder)
import Hero from './Hero'; 
import Introduction from './Introduction'; 
import CourseOverview from './CourseOverview'; 
import Testimonials from './Testimonials'; 

const HomePage = () => {
  return (
    <main>
      {/* Home Page components */}
      <Hero />
      <Introduction />
      <CourseOverview />
      <Testimonials />
    </main>
  );
};

export default HomePage;