/* eslint-disable no-unused-vars */



import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Introduction = () => {
  // Animation Variants
  const imageVariants = {
    hidden: { opacity: 0, x: 50, rotate: 5, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotate: 0, 
      scale: 1, 
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } 
    },
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } 
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section 
      id="intro"
      className="py-16 bg-gray-900" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* 1. Text Content Column */}
        <motion.div variants={textVariants} className="space-y-6">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-extrabold text-white"
          >
            The <span className="text-purple-400">Smart Way</span> to Learn Driving
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-300"
          >
            We don't just teach you to pass the test; we teach you to master the road. Our focused, high-intensity modules guarantee you gain confidence quickly and efficiently.
          </motion.p>
          
          <motion.div variants={itemVariants} className="space-y-3 pt-2">
            
            <motion.p variants={itemVariants} className="flex items-center text-gray-200 text-sm">
              <ArrowRight className="h-4 w-4 mr-2 text-purple-400" />
              NTSA Certified Curriculum focused on Kenyan traffic laws.
            </motion.p>
            
            <motion.p variants={itemVariants} className="flex items-center text-gray-200 text-sm">
              <ArrowRight className="h-4 w-4 mr-2 text-purple-400" />
              Personalized training tailored to your learning pace.
            </motion.p>
            
            <motion.p variants={itemVariants} className="flex items-center text-gray-200 text-sm">
              <ArrowRight className="h-4 w-4 mr-2 text-purple-400" />
              Practice in modern, well-maintained vehicles.
            </motion.p>
          </motion.div>
          
          <motion.button 
            variants={itemVariants}
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-sm font-semibold rounded-lg shadow-md transition duration-300"
          >
            View All Courses
          </motion.button>
        </motion.div>
        
        {/* 2. Image/Model Board Column */}
        <motion.div variants={imageVariants} className="relative hidden lg:block">
          <div className="w-full h-80 bg-gray-800 rounded-xl shadow-2xl p-6 transform border-2 border-purple-500/50">
            <div className="text-white h-full flex flex-col justify-center items-center">
              <span className="text-4xl font-bold text-purple-400">Model Board</span>
              <p className="text-gray-400 mt-2">Interactive, 3D Traffic Models for easy learning.</p>
              
              <div className="mt-4 w-32 h-2 bg-red-500 rounded-full"></div>
              <div className="mt-1 w-24 h-2 bg-yellow-500 rounded-full"></div>
              <div className="mt-1 w-40 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </motion.section>
  );
};

export default Introduction;