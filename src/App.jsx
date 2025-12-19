// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './assets/NavBar/Navbar'; 
import HomePage from './assets/Components/HomePage'; 
import Courses from './assets/Components/Courses'; // 1. Import the Courses component
import About from './assets/Components/About'; 
import Contact from './assets/Components/Contact'; 

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      
      <Routes>
        {/* Everything on one page for snapping */}
        <Route path="/" element={
          <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <section id="home" className="snap-start"><HomePage /></section>
            
            {/* 2. Added Courses to the scroll stack */}
            <section id="courses" className="snap-start"><Courses /></section>
            
            <section id="about" className="snap-start"><About /></section>
            <section id="contact" className="snap-start"><Contact /></section>
          </main>
        } />
        
        {/* Individual routes */}
        <Route path="/courses" element={<Courses />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;