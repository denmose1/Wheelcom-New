/* eslint-disable no-unused-vars */

import React from 'react';
import { motion } from 'framer-motion';
import TeamImage from '../Images/drive.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between child animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section className="min-h-screen pt-24 pb-20 bg-gray-900 text-white flex flex-col items-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        
        {/* Animated Title */}
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-center mb-16 tracking-tighter"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <span 
            className="bg-clip-text text-transparent"
            style={{ 
              backgroundImage: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899)', // Blue, Purple, Pink Gradient
            }}
          >
            Driving the Future, Safely.
          </span>
        </motion.h1>

        <motion.div
          className="bg-gray-800 rounded-3xl p-6 md:p-12 shadow-2xl border border-gray-700/50"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Column: Mission & Values (Animated) */}
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              
              <motion.h2 
                className="text-3xl font-bold text-purple-400 border-b border-gray-700 pb-2"
                variants={itemVariants}
              >
                Our Mission
              </motion.h2>

              <motion.p className="text-lg text-gray-300 leading-relaxed" variants={itemVariants}>
                DriveWheel Academy is dedicated to fostering a new generation of **responsible and confident drivers** in Kenya. We believe driving is a privilege that requires rigorous training, defensive strategies, and a deep respect for road safety.
              </motion.p>

              <motion.h2 
                className="text-3xl font-bold text-purple-400 border-b border-gray-700 pb-2 pt-4"
                variants={itemVariants}
              >
                Why Choose Us?
              </motion.h2>
              
              <motion.ul className="space-y-4 text-gray-400" variants={containerVariants}>
                <motion.li className="flex items-start text-lg" variants={itemVariants}>
                  <span className="text-pink-500 font-bold mr-3 text-xl">🚀</span>
                </motion.li>
                <motion.li className="flex items-start text-lg" variants={itemVariants}>
                  <span className="text-pink-500 font-bold mr-3 text-xl">🚗</span>
                  **Modern leet:** Learn in reliable, well-maintained vehicles equipped with the latest safety features.
                </motion.li>
                <motion.li className="flex items-start text-lg" variants={itemVariants}>
                  <span className="text-pink-500 font-bold mr-3 text-xl">⏰</span>
                  **Flexible Learning:** We offer customized schedules to fit your school, work, or family commitments.
                </motion.li>
                <motion.li className="flex items-start text-lg" variants={itemVariants}>
                  <span className="text-pink-500 font-bold mr-3 text-xl">🛡️</span>
                  **Defensive Driving Focus:** We don't just teach the test; we teach lifetime road safety and risk management.
                </motion.li>
              </motion.ul>

            </motion.div>

            {/* Right Column: Image with Floating Animation */}
            <motion.div
              className="hidden lg:flex justify-center items-center h-full min-h-[400px] p-6"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.img
                src={TeamImage}
                alt="DriveWheel Academy Team"
                className="rounded-xl object-cover shadow-2xl w-full h-full border border-pink-500/50"
                // Subtle floating/breathing effect
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            
          </div>
        </motion.div>
        {/* --- End Main Content Card --- */}

        {/* Footer Text */}
        <motion.p
          className="text-center text-gray-500 mt-16 text-sm italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Your journey on the road starts with the right foundation.
        </motion.p>
      </div>
    </section>
  );
};

export default About;