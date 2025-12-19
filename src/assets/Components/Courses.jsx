/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Monitor, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ElectricBorder from './ElectricBorder';

const serviceCategories = [
  {
    title: "Driving Courses",
    description: "NTSA-approved training for beginners, refreshers, and professional drivers.",
    icon: <Car className="w-12 h-12 text-blue-400" />,
    link: "/courses/driving",
    color: "#3B82F6", 
    features: ["Manual & Auto", "NTSA Exams", "Defensive Driving"]
  },
  {
    title: "Computer Courses",
    description: "Master digital literacy, from basic office suites to advanced graphics and web apps.",
    icon: <Monitor className="w-12 h-12 text-purple-400" />,
    link: "/courses/computer",
    color: "#8B5CF6", 
    features: ["Computer Packages", "Graphic Design", "Digital Marketing"]
  },
  {
    title: "Motor Insurance",
    description: "Secure your vehicle with comprehensive or third-party covers at the best rates.",
    icon: <ShieldCheck className="w-12 h-12 text-pink-400" />,
    link: "/courses/insurance",
    color: "#EC4899", 
    features: ["Instant Quotes", "Claims Support", "Renewal Alerts"]
  }
];

const Courses = () => {
  return (
    /* ADDED: id="courses" and className="snap-section" */
    <section id="courses" className="snap-section pt-32 pb-20 bg-gray-900 text-white px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView for scroll effect
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            Explore Our <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">Expertise</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you're hitting the road, upgrading your digital skills, or securing your future, Wheelcom is your trusted partner.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCategories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Changed to whileInView
              transition={{ delay: index * 0.1 }}
            >
              <ElectricBorder color={item.color} thickness={2} chaos={0.3}>
                <div className="bg-gray-800 p-8 rounded-xl h-[450px] flex flex-col justify-between hover:bg-gray-750 transition-colors group">
                  <div>
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-xs text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    to={item.link}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-700 hover:bg-purple-600 text-white font-bold rounded-lg transition-all duration-300 group"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;