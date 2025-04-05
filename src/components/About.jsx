// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:mr-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a passionate software developer with a strong foundation in backend development, data structures, algorithms, and system design. I enjoy building scalable applications that solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                My journey in software development started with a curiosity about how digital solutions can transform businesses and improve lives. Today, I continue to expand my knowledge in emerging technologies like generative AI while strengthening my core software engineering skills.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:ml-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">My Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-blue-600 to-teal-400"></div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">Writing clean, maintainable code that solves real problems</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-blue-600 to-teal-400"></div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">Designing systems with scalability and performance in mind</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-blue-600 to-teal-400"></div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">Continuously learning and adapting to new technologies</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-blue-600 to-teal-400"></div>
                  <p className="ml-3 text-gray-600 dark:text-gray-300">Collaborating effectively with cross-functional teams</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;