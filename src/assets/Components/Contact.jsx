// src/assets/Components/Contact.jsx
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Icons needed: Mail, Phone, MapPin from lucide-react (npm install lucide-react)
import { Mail, Phone, MapPin } from 'lucide-react'; 

// NOTE: Please ensure your whatsapp.jpg is accessible. 
import WhatsAppIcon from '../Images/whatsapp.jpg'; // <-- CHECK THIS PATH
// --- Animation Variants ---
const formVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
  };
  
  // UPDATED WHATSAPP NUMBER (without +, spaces, or dashes)
  const whatsappNumber = '254713923912'; 

  return (
    <section className="min-h-screen pt-24 pb-20 bg-gray-900 text-white flex flex-col items-center">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        
        {/* Animated Title */}
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-center mb-16 tracking-tighter"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span 
            className="bg-clip-text text-transparent"
            style={{ 
              backgroundImage: 'linear-gradient(90deg, #3B82F6, #EC4899, #F59E0B)',
            }}
          >
            Get In Touch
          </span>
        </motion.h1>

        {/* --- Main Content Grid (Form and Info) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Right Column: Contact Information */}
          <motion.div
            className="lg:col-span-1 bg-gray-800 p-8 rounded-3xl shadow-2xl space-y-8 h-fit"
            initial="hidden"
            animate="visible"
            variants={formVariants}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-pink-500 border-b border-gray-700 pb-3">
              Reach Us Directly
            </h2>
            
            {/* 📞 Call Us */}
            <motion.div className="flex items-start space-x-4" variants={itemVariants}>
              <Phone className="w-6 h-6 text-blue-400 mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white">Call Us</h3>
                <p className="text-gray-400 text-base">+254 700 123 456</p> 
              </div>
            </motion.div>

            {/* 📲 WhatsApp Chat (NEW) */}
            <motion.div className="flex items-start space-x-4" variants={itemVariants}>
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
              >
                <img src={WhatsAppIcon} alt="WhatsApp" className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">Chat on WhatsApp</h3>
                  <p className="text-gray-400 text-base">{`+${whatsappNumber.slice(0, 3)} ${whatsappNumber.slice(3, 6)} ${whatsappNumber.slice(6)}`}</p>
                </div>
              </a>
            </motion.div>

            {/* 📧 Email Us */}
            <motion.div className="flex items-start space-x-4" variants={itemVariants}>
              <Mail className="w-6 h-6 text-blue-400 mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white">Email Us</h3>
                <p className="text-gray-400 text-base">info@drivewheelacademy.co.ke</p> 
              </div>
            </motion.div>

            {/* 📍 Our Location */}
            <motion.div className="flex items-start space-x-4" variants={itemVariants}>
              <MapPin className="w-6 h-6 text-blue-400 mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white">Our Location</h3>
                <p className="text-gray-400 text-base">Upper Hill, Nairobi, Kenya</p>
                <p className="text-sm text-gray-500 mt-1">Visit during business hours: Mon-Sat, 8am-5pm</p>
              </div>
            </motion.div>
          </motion.div>


          {/* Left Column: Contact Form */}
          <motion.div
            className="lg:col-span-2 bg-gray-800 p-8 rounded-3xl shadow-2xl"
            initial="hidden"
            animate="visible"
            variants={formVariants}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                  placeholder="Your Name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                  placeholder="name@example.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                  placeholder="Enquiry or Appointment"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                  placeholder="How can we help you?"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full py-3 mt-4 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-lg shadow-lg transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-pink-500/50"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;