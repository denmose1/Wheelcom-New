/* eslint-disable no-unused-vars */

import { AnimatePresence, motion } from "framer-motion"; 
import React from "react";
import { NavbarMenu } from '../userData/data';

const ResponsiveMenu = ({ open, setOpen }) => {
    return (
        <AnimatePresence mode="wait">
        {open && (
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.3 }}
                className='fixed top-20 left-0 w-full h-screen z-40' // Changed to fixed
            >
                <div className="text-xl font-semibold uppercase bg-purple-800 text-white py-10 m-6 rounded-3xl shadow-2xl">
                    <ul className="flex flex-col justify-center items-center gap-10">
                        {NavbarMenu.map((item) => (
                            <li key={item.id}>
                                <a 
                                    href={item.link} 
                                    onClick={() => setOpen(false)} // Close menu on click
                                    className="hover:text-purple-200 transition-colors"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        )}
        </AnimatePresence>
    )
};

export default ResponsiveMenu;