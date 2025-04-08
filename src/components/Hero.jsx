// components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
              Roushan Kumar
            </span>
          </h2>
          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "Problem Solver",
              2000,
              "Tech Enthusiast",
              2000,
            ]}
            wrapper="h3"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6"
          />
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
            I build modern web applications with a focus on clean code,
            performance, and user experience. Passionate about solving complex
            problems with elegant solutions.
          </p>

          <div className="flex gap-4 mb-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-400 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ y: -5 }}
              href="https://github.com/roushanku"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ y: -5 }}
              href="https://www.linkedin.com/in/roushan70700/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{ y: -5 }}
              href="https://leetcode.com/u/roush_70700/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300"
            >
              <img
                src="src/leetcode.png"
                alt="LeetCode"
                className="w-6 h-6 object-contain inline-block"
              />
            </motion.a>

            <motion.a
              whileHover={{ y: -5 }}
              href="https://codeforces.com/profile/M_graph"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-red-500 transition-colors duration-300"
            >
              <img
                src="src/codeforces.png"
                alt="Codeforces"
                className="w-6 h-6 object-contain inline-block"
              />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-600 to-teal-400 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
              <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                <img
                  src="src/WhatsApp Image 2025-04-08 at 5.17.19 PM.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
