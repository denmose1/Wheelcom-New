// src/assets/components/CourseOverview.jsx
/* eslint-disable no-unused-vars */

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Award } from 'lucide-react';

const courses = [
  {
    icon: Clock,
    title: 'Beginner Class',
    duration: '4-6 Weeks',
    features: ['Manual/Automatic', 'Theory & Practical', 'NTSA Ready'],
    price: 'Ksh 15,000'
  },
  {
    icon: Shield,
    title: 'Advanced Refresher',
    duration: '2 Weeks',
    features: ['Defensive Driving', 'Highway Tactics', 'Night Driving'],
    price: 'Ksh 8,000'
  },
  {
    icon: Award,
    title: 'Commercial Licence (PSV)',
    duration: '8 Weeks',
    features: ['Heavy Vehicle Training', 'Commercial Theory', 'Licensing Support'],
    price: 'Ksh 25,000'
  },
];

const CourseCard = ({ course, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.5, delay: index * 0.15 }
    },
  };
  
  const Icon = course.icon;
  
  return (
    <motion.div 
      className="bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-purple-500/70 space-y-4"
      variants={cardVariants}
    >
      <Icon className="h-8 w-8 text-purple-400" />
      <h3 className="text-xl font-bold text-white">{course.title}</h3>
      <p className="text-sm font-semibold text-purple-300">{course.duration}</p>
      
      <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside">
        {course.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      
      <div className="flex justify-between items-center pt-2 border-t border-gray-700">
        <span className="text-lg font-extrabold text-blue-400">{course.price}</span>
        <button className="px-4 py-1 text-xs bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition duration-200">
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

const CourseOverview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.3 
      } 
    },
  };

  return (
    <motion.section 
      id="courses"
      className="py-16 bg-gray-800"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-white mb-10">
          Our Most Popular <span className="text-purple-400">Courses</span>
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </motion.div>
        
        <motion.p 
          className="text-center text-gray-400 mt-10 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Need something specific? <a href="#contact" className="text-purple-400 hover:underline">Contact us</a> for custom training packages.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default CourseOverview;