import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaTrophy, FaUsers } from 'react-icons/fa';

const About = () => {
  const milestones = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      description: "[Degree Details from Resume]",
      value: "CGPA: 9.42"
    },
    {
      icon: <FaCode />,
      title: "Projects",
      description: "Completed Projects",
      value: "[Number of Projects]"
    },
    {
      icon: <FaTrophy />,
      title: "Achievements",
      description: "Recognition & Awards",
      value: "[Key Achievement]"
    },
    {
      icon: <FaUsers />,
      title: "Experience",
      description: "Professional Work",
      value: "[Experience Duration]"
    }
  ];

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
    <section id="about" className="section" style={{ backgroundColor: 'var(--background-color)' }}>
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
              About Me
            </h2>
            <div 
              className="w-20 h-1 mx-auto rounded-full"
              style={{ backgroundColor: 'var(--primary-color)' }}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative mx-auto lg:mx-0 max-w-md">
                {/* Decorative Background */}
                <div 
                  className="absolute -top-4 -left-4 w-full h-full rounded-2xl opacity-20"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                />
                
                {/* Image Placeholder */}
                <div 
                  className="relative w-full h-96 rounded-2xl flex items-center justify-center text-6xl"
                  style={{ 
                    backgroundColor: 'var(--surface-color)',
                    border: '2px solid var(--border-color)',
                    color: 'var(--text-muted)'
                  }}
                >
                  {/* Replace with actual image */}
                  <div className="text-center">
                    <div className="text-6xl mb-4">👤</div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      [Professional Headshot Placeholder]
                    </p>
                  </div>
                </div>

                {/* Floating Element */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full flex items-center justify-center text-2xl"
                  style={{ 
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    boxShadow: 'var(--shadow-large)'
                  }}
                >
                  💻
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="mb-4" style={{ color: 'var(--text-primary)' }}>
                  My Journey
                </h3>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p style={{ color: 'var(--text-secondary)' }}>
                    [My Professional Summary from Resume - Include passion for technology, educational background, and professional aspirations. Mention key experiences at Aurelia Technologies and academic achievements.]
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    [Additional personal narrative about technical interests, problem-solving approach, and future goals. Highlight collaborative approach and continuous learning mindset.]
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    [Conclusion paragraph about commitment to excellence, innovation, and making a positive impact in the technology sector.]
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="mb-4" style={{ color: 'var(--text-primary)' }}>
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--primary-color)' }}
                    />
                    Strong foundation in Computer Science and Engineering
                  </li>
                  <li className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--primary-color)' }}
                    />
                    Hands-on experience with modern web technologies
                  </li>
                  <li className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--primary-color)' }}
                    />
                    Passionate about creating innovative solutions
                  </li>
                  <li className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--primary-color)' }}
                    />
                    Excellent problem-solving and collaborative skills
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Milestones */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card text-center group"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: 'var(--primary-color)',
                    color: 'white'
                  }}
                >
                  {milestone.icon}
                </div>
                <h4 className="mb-2" style={{ color: 'var(--text-primary)' }}>
                  {milestone.title}
                </h4>
                <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                  {milestone.description}
                </p>
                <p 
                  className="text-lg font-semibold"
                  style={{ color: 'var(--primary-color)' }}
                >
                  {milestone.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;