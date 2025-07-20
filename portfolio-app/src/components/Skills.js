import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, 
  FaGitAlt, FaDatabase, FaCloud, FaMobile,
  FaLightbulb, FaUsers, FaComments, FaClock
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiMysql
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 95, icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", level: 90, icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "JavaScript", level: 88, icon: <FaJs />, color: "#F7DF1E" },
        { name: "React.js", level: 85, icon: <FaReact />, color: "#61DAFB" },
        { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss />, color: "#38B2AC" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 80, icon: <FaNodeJs />, color: "#339933" },
        { name: "Express.js", level: 75, icon: <SiExpress />, color: "#000000" },
        { name: "Python", level: 70, icon: <FaPython />, color: "#3776AB" },
        { name: "MongoDB", level: 78, icon: <SiMongodb />, color: "#47A248" },
        { name: "MySQL", level: 72, icon: <SiMysql />, color: "#4479A1" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85, icon: <FaGitAlt />, color: "#F05032" },
        { name: "Firebase", level: 70, icon: <SiFirebase />, color: "#FFCA28" },
        { name: "Database Design", level: 75, icon: <FaDatabase />, color: "#336791" },
        { name: "Cloud Services", level: 65, icon: <FaCloud />, color: "#4285F4" },
        { name: "Responsive Design", level: 90, icon: <FaMobile />, color: "#8B5CF6" }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 92, icon: <FaLightbulb />, color: "#FFD700" },
        { name: "Team Collaboration", level: 88, icon: <FaUsers />, color: "#4CAF50" },
        { name: "Communication", level: 85, icon: <FaComments />, color: "#2196F3" },
        { name: "Time Management", level: 90, icon: <FaClock />, color: "#FF5722" },
        { name: "Adaptability", level: 87, icon: <FaLightbulb />, color: "#9C27B0" }
      ]
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
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
              Skills & Technologies
            </h2>
            <div 
              className="w-20 h-1 mx-auto rounded-full mb-4"
              style={{ backgroundColor: 'var(--primary-color)' }}
            />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A comprehensive overview of my technical skills and expertise across various technologies and domains.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="card"
              >
                <h3 className="mb-6 text-center" style={{ color: 'var(--text-primary)' }}>
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      className="skill-item"
                    >
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="text-2xl"
                            style={{ color: skill.color }}
                          >
                            {skill.icon}
                          </motion.div>
                          <span 
                            className="font-medium"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {skill.name}
                          </span>
                        </div>
                        <span 
                          className="text-sm font-semibold"
                          style={{ color: 'var(--primary-color)' }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div 
                        className="h-3 rounded-full overflow-hidden"
                        style={{ backgroundColor: 'var(--border-color)' }}
                      >
                        <motion.div
                          variants={progressVariants}
                          custom={skill.level}
                          className="h-full rounded-full relative"
                          style={{ backgroundColor: 'var(--primary-color)' }}
                        >
                          {/* Shine Effect */}
                          <motion.div
                            animate={{
                              x: [-100, 200],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: skillIndex * 0.2,
                              repeatDelay: 3
                            }}
                            className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                            style={{ transform: 'skewX(-25deg)' }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--primary-color)' }}
                >
                  20+
                </motion.div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Technologies Mastered
                </p>
              </div>
              
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--primary-color)' }}
                >
                  [X]+
                </motion.div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Projects Completed
                </p>
              </div>
              
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--primary-color)' }}
                >
                  [X]
                </motion.div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Years Experience
                </p>
              </div>
              
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--primary-color)' }}
                >
                  24/7
                </motion.div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Learning Mode
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;