// src/assets/Components/Testimonials.jsx
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react'; 

const testimonials = [
  {
    quote: "Getting my Class B license was seamless. The instructors were patient, and the night driving sessions were incredibly helpful. Highly recommend!",
    name: "Alex M.",
    role: "New Driver",
    rating: 5,
  },
  {
    quote: "I took the Advanced Refresher course, and my highway confidence increased tenfold. The training materials were top-notch and professional.",
    name: "Sarah W.",
    role: "Experienced Driver",
    rating: 5,
  },
  {
    quote: "Their Commercial training prepared me perfectly for my PSV license test. The blend of theory and practical sessions is truly effective.",
    name: "John K.",
    role: "Logistics Manager",
    rating: 4,
  },
];

// --- Animation Variants for Content Transition ---
const quoteVariants = {
  enter: { 
    opacity: 0, 
    y: 50, 
    scale: 0.95,
    transition: { duration: 0.5 }
  },
  center: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    y: -50, 
    scale: 0.95,
    transition: { duration: 0.5 }
  }
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  //  cycle the testimonials every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % testimonials.length
      );
    }, 7000); 

    return () => clearInterval(interval);
  }, []); 
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          Hear From Our <span className="text-purple-400">Successful Students</span>
        </motion.h2>

        {/* --- Testimonial Card (Slider) --- */}
        <motion.div
            className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 mx-auto max-w-2xl min-h-[300px] flex flex-col justify-center relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex} // Key is essential for AnimatePresence to detect a change
                    variants={quoteVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 p-8 flex flex-col justify-center"
                >
                    
                    <div className="flex items-center mb-4 text-yellow-400">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400" />
                      ))}
                    </div>

                    <Quote className="h-8 w-8 text-purple-400 opacity-60 mb-4 shrink-0" />
                    
                    <p className="text-gray-300 text-lg italic mb-6">
                      "{currentTestimonial.quote}"
                    </p>
                    
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-white font-semibold text-base">{currentTestimonial.name}</p>
                      <p className="text-purple-300 text-sm">{currentTestimonial.role}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </motion.div>

        <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentIndex ? 'bg-purple-500' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                />
            ))}
        </div>

        <motion.p
            className="text-center text-gray-500 mt-12 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
        >
            Ready to start your journey? <a href="/contact" className="text-purple-400 hover:text-purple-300 font-medium transition duration-200">Enroll Today.</a>
        </motion.p>

      </div>
    </section>
  );
};

export default Testimonials;