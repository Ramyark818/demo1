import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Floating animation for background elements
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatingDelayedAnimation = {
    y: [0, 20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-20"
          style={{ backgroundColor: 'var(--primary-color)' }}
        />
        <motion.div
          animate={floatingDelayedAnimation}
          className="absolute top-40 right-20 w-16 h-16 rounded-full opacity-30"
          style={{ backgroundColor: 'var(--secondary-color)' }}
        />
        <motion.div
          animate={floatingAnimation}
          className="absolute bottom-20 left-20 w-12 h-12 rounded-full opacity-25"
          style={{ backgroundColor: 'var(--accent-color)' }}
        />
        <motion.div
          animate={floatingDelayedAnimation}
          className="absolute bottom-40 right-10 w-24 h-24 rounded-full opacity-15"
          style={{ backgroundColor: 'var(--primary-color)' }}
        />

        {/* Gradient Circles */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ 
            background: `radial-gradient(circle, var(--primary-color) 0%, transparent 70%)` 
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ 
            background: `radial-gradient(circle, var(--secondary-color) 0%, transparent 70%)` 
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg mb-4"
              style={{ color: 'var(--primary-color)' }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              <span className="block">RAMYA RK</span>
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-6"
              style={{ color: 'var(--primary-color)' }}
            >
              [Primary Role from Resume]
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              [Brief Professional Summary from Resume - A passionate computer science student and web developer with expertise in modern technologies, dedicated to creating innovative solutions and delivering exceptional user experiences.]
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#projects')}
                className="btn btn-primary group"
              >
                <FaEye className="transition-transform group-hover:scale-110" />
                View Projects
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary group"
              >
                <FaDownload className="transition-transform group-hover:scale-110" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection('#about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span>Scroll Down</span>
              <FaChevronDown size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, var(--primary-color) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;