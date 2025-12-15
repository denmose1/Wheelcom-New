// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './assets/NavBar/Navbar'; 

import HomePage from './assets/Components/HomePage'; 
import About from './assets/Components/About'; 
import Contact from './assets/Components/Contact'; 


function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      
      {/* Navbar is outside Routes */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      
    </div>
  );
}

export default App;