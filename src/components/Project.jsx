// components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TravelSathie",
      description: "A comprehensive travel booking platform with features for finding hotels, flights, and activities. Includes user authentication, booking management, and payment processing.",
      image: "/path-to-image.jpg", // Replace with actual path
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      github: "https://github.com/roushanku/Travel-Sathi-Booking-App",
      demo: "https://travel-sathi-booking-app-ietk.vercel.app/"
    },
    {
      id: 2,
      title: "TutorConnect",
      description: "An online platform connecting students with tutors for personalized learning experiences. Features include scheduling, virtual classrooms, and progress tracking.",
      image: "/path-to-image.jpg", // Replace with actual path
      technologies: ["React", "Firebase", "WebRTC", "Material UI", "Node.js"],
      github: "https://github.com/roushanku/Edu-Initiative-frontend",
      demo: "https://tutorconnect-demo.vercel.app"
    },
    {
      id: 3,
      title: "Chat App",
      description: "A real-time messaging application with features like user authentication, group chats, direct messages, and file sharing capabilities.",
      image: "/path-to-image.jpg", // Replace with actual path
      technologies: ["React", "Socket.io", "Express", "MongoDB", "AWS S3"],
      github: "https://github.com/yourusername/chatapp",
      demo: "https://chatapp-demo.vercel.app"
    }
  ];

  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-48 bg-gray-300 dark:bg-gray-700">
                {/* Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xl font-medium">
                  {project.title}
                  {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
                </div>
                
                {activeProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-teal-400/80 flex items-center justify-center gap-4"
                  >
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </motion.div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;