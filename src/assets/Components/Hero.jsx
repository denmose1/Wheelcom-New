// src/assets/Components/Hero.jsx
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
// CORRECTED PATH: Capital 'I' in Images
import driveImage from "../Images/drive.jpg"; 
import wheelcomImage from "../Images/wheelcom.jpg"; 

const images = [driveImage, wheelcomImage];

const Hero = () => {
  // --- CONTACT INFO ---
  const phoneNumber = '+254 7XX XXX XXX';
  const emailAddress = 'info@wheelcom.co.ke';
  const location = 'Utawala, Nairobi, Kenya';
  // --------------------
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); 

    return () => clearInterval(timer);
  }, []);

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }, 
  };
  const itemVariants = {
    hidden: { y: 10, opacity: 0, filter: 'blur(8px)' },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };
  const transitionVariants = {
    initial: { opacity: 0, scale: 1.05 }, 
    animate: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeInOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.8, ease: "easeInOut" } }, 
  };
  // --------------------------

  return (
    <section id="hero" className="relative min-h-[500px] max-h-[700px] bg-gray-900 overflow-hidden pt-16">
      
      {/* 1. ANIMATED IMAGE CAROUSEL */}
      <AnimatePresence initial={false}>
        <motion.img
          key={currentImageIndex} 
          src={images[currentImageIndex]}
          alt={`Driving school environment image ${currentImageIndex + 1}`}
          className="absolute top-0 right-0 h-full w-[70%] object-cover object-center z-0"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
      </AnimatePresence>

      {/* 2. DARK OVERLAY & GRADIENT */}
      <div className="absolute top-0 right-0 h-full w-[70%] bg-black/60 z-10"></div>
      <div className="absolute top-0 right-[25%] h-full w-[10%] bg-linear-to-r from-gray-900 to-transparent z-20"></div>

      {/* Hero Content (Text Area) */}
      <div className="relative z-30 max-w-5xl mx-auto px-2 sm:px-4 lg:px-6 h-full flex flex-col justify-center text-white">
        
        {/* Top Contact Info */}
        <div className="absolute top-2 right-2 text-sm font-semibold text-purple-400 text-right uppercase">
          <p>CALL NOW: {phoneNumber}</p>
          <p>EMAIL: <a href={`mailto:${emailAddress}`} className="hover:underline">{emailAddress}</a></p>
        </div>

        {/* Main Headlines - Animated Container */}
        <motion.div
          className="max-w-xl space-y-2 pt-10 md:pt-0" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            variants={itemVariants}
          >
            <span className="text-purple-400">Drive Confidently.</span> Drive Safely.
          </motion.h1>

          <motion.h2 
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-200"
            variants={itemVariants}
          >
            Get Your <span className="text-purple-300">License FAST</span> in {location}
          </motion.h2>
          
          <motion.p 
            className="text-sm text-gray-300 max-w-sm"
            variants={itemVariants}
          >
            Highly-rated instructors, flexible schedules, and guaranteed road-readiness right here in Utawala.
          </motion.p>

          <motion.button 
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-sm font-semibold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.02]"
            variants={itemVariants}
          >
            START LEARNING TODAY
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;