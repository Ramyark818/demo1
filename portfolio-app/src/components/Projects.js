import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaFilter } from 'react-icons/fa';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "[Teaching Aid Project Name]",
      description: "Desktop-based application using JavaFX to assist students in understanding fundamental concepts through visual simulations and interactive UI.",
      detailedDescription: "[Detailed description of the Teaching Aid project - Explain the desktop application built with JavaFX, its purpose for educational assistance, visual simulations implemented, interactive features, and learning outcomes achieved.]",
      technologies: ["JavaFX", "Java", "Educational Technology"],
      category: "Desktop Application",
      image: "📚",
      githubUrl: "[GitHub Repository URL]",
      liveUrl: null,
      role: "Full Stack Developer",
      challenges: "[Key challenges faced during development]",
      solutions: "[Solutions implemented to overcome challenges]",
      features: [
        "Interactive visual simulations",
        "User-friendly educational interface",
        "Concept visualization tools",
        "Educational content management"
      ]
    },
    {
      id: 2,
      title: "[E-commerce Website Project Name]",
      description: "Dynamic e-commerce application using MERN Stack with user authentication, product catalog, and order management to simulate real-world online shopping.",
      detailedDescription: "[Detailed description of the E-commerce project - Explain the MERN stack implementation, user authentication system, product management features, shopping cart functionality, order processing, and database design.]",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      category: "Full Stack Web",
      image: "🛒",
      githubUrl: "[GitHub Repository URL]",
      liveUrl: "[Live Demo URL]",
      role: "Full Stack Developer",
      challenges: "[Key challenges in e-commerce development]",
      solutions: "[Solutions for authentication, payment, and inventory management]",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and checkout process",
        "Order management system",
        "Admin dashboard for inventory management"
      ]
    },
    {
      id: 3,
      title: "[Additional Project Name 1]",
      description: "[Brief description of another significant project from resume]",
      detailedDescription: "[Detailed description of this project including technologies used, problems solved, and impact created]",
      technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
      category: "[Project Category]",
      image: "💻",
      githubUrl: "[GitHub Repository URL]",
      liveUrl: "[Live Demo URL if available]",
      role: "[Your role in the project]",
      challenges: "[Challenges faced]",
      solutions: "[Solutions implemented]",
      features: [
        "[Feature 1]",
        "[Feature 2]",
        "[Feature 3]",
        "[Feature 4]"
      ]
    },
    {
      id: 4,
      title: "[Additional Project Name 2]",
      description: "[Brief description of another project]",
      detailedDescription: "[Detailed description with technical implementation details]",
      technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
      category: "[Project Category]",
      image: "🚀",
      githubUrl: "[GitHub Repository URL]",
      liveUrl: "[Live Demo URL if available]",
      role: "[Your role]",
      challenges: "[Development challenges]",
      solutions: "[Technical solutions]",
      features: [
        "[Key Feature 1]",
        "[Key Feature 2]",
        "[Key Feature 3]",
        "[Key Feature 4]"
      ]
    }
  ];

  const filters = ['All', 'Full Stack Web', 'Desktop Application', 'Mobile App', 'Backend API'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--background-color)' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="mb-4" style={{ color: 'var(--text-primary)' }}>
              Featured Projects
            </h2>
            <div 
              className="w-20 h-1 mx-auto rounded-full mb-4"
              style={{ backgroundColor: 'var(--primary-color)' }}
            />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A showcase of my recent work, demonstrating technical skills and problem-solving abilities across various technologies and domains.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 mb-4">
              <FaFilter style={{ color: 'var(--primary-color)' }} />
              <span style={{ color: 'var(--text-secondary)' }}>Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedFilter === filter 
                      ? 'text-white' 
                      : ''
                  }`}
                  style={{
                    backgroundColor: selectedFilter === filter 
                      ? 'var(--primary-color)' 
                      : 'var(--surface-color)',
                    color: selectedFilter === filter 
                      ? 'white' 
                      : 'var(--text-secondary)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="card group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div 
                    className="h-48 rounded-lg mb-6 flex items-center justify-center text-6xl"
                    style={{ 
                      backgroundColor: 'var(--border-color)',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {project.image}
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="mb-3 group-hover:text-primary transition-colors duration-300" 
                        style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs rounded-full"
                          style={{
                            backgroundColor: 'var(--primary-color)',
                            color: 'white'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                          style={{ color: 'var(--text-secondary)' }}
                          onClick={(e) => e.stopPropagation()}
                          onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                          onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                          <FaGithub /> Code
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                          style={{ color: 'var(--text-secondary)' }}
                          onClick={(e) => e.stopPropagation()}
                          onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                          onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8"
              style={{ backgroundColor: 'var(--surface-color)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="mb-2" style={{ color: 'var(--text-primary)' }}>
                    {selectedProject.title}
                  </h2>
                  <p style={{ color: 'var(--primary-color)' }}>
                    {selectedProject.role}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full transition-colors duration-300"
                  style={{ 
                    backgroundColor: 'var(--border-color)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <FaTimes />
                </button>
              </div>

              {/* Modal Content */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  {/* Project Image */}
                  <div 
                    className="h-64 rounded-lg mb-6 flex items-center justify-center text-8xl"
                    style={{ 
                      backgroundColor: 'var(--border-color)',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {selectedProject.image}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="mb-3" style={{ color: 'var(--text-primary)' }}>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 rounded-lg"
                          style={{
                            backgroundColor: 'var(--primary-color)',
                            color: 'white'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <FaGithub /> View Code
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  {/* Description */}
                  <div className="mb-6">
                    <h4 className="mb-3" style={{ color: 'var(--text-primary)' }}>
                      Project Overview
                    </h4>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="mb-3" style={{ color: 'var(--text-primary)' }}>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: 'var(--primary-color)' }}
                          />
                          <span style={{ color: 'var(--text-secondary)' }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges & Solutions */}
                  <div className="mb-6">
                    <h4 className="mb-3" style={{ color: 'var(--text-primary)' }}>
                      Challenges & Solutions
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium mb-2" style={{ color: 'var(--primary-color)' }}>
                          Challenges:
                        </h5>
                        <p style={{ color: 'var(--text-secondary)' }}>
                          {selectedProject.challenges}
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2" style={{ color: 'var(--primary-color)' }}>
                          Solutions:
                        </h5>
                        <p style={{ color: 'var(--text-secondary)' }}>
                          {selectedProject.solutions}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;