import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Web Developer Intern',
      company: 'Aurelia Technologies Pvt Ltd',
      location: '[Location from Resume]',
      duration: 'Feb 2025 - May 2025',
      description: '[Work Experience Description from Resume - Include specific responsibilities, technologies used, and achievements during the internship]',
      achievements: [
        '[Achievement 1 from resume]',
        '[Achievement 2 from resume]',
        '[Achievement 3 from resume]'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', '[Other technologies used]']
    }
  ];

  const education = [
    {
      type: 'education',
      degree: 'Computer Science Engineering',
      institution: 'University BDT College of Engineering',
      location: '[Location]',
      duration: 'December 2022 - Present',
      grade: 'CGPA: 9.42',
      description: '[Educational Experience Description - Include relevant coursework, projects, and academic achievements]',
      achievements: [
        'Maintained excellent academic performance with CGPA 9.42',
        '[Other academic achievements from resume]',
        '[Relevant coursework or projects]'
      ]
    },
    {
      type: 'education',
      degree: '[Previous Education Level]',
      institution: 'Siddaganga Composite High School',
      location: '[Location]',
      duration: 'May 2017 - April 2020',
      grade: 'Percentage: 95.30%',
      description: '[High School Description if relevant]',
      achievements: [
        'Achieved 95.30% in high school',
        '[Other achievements if any]'
      ]
    },
    {
      type: 'education',
      degree: '[Previous Education Level]',
      institution: 'Siddaganga PU Science College',
      location: '[Location]',
      duration: 'August 2020 - May 2022',
      grade: 'PUC: 98.24%',
      description: '[Pre-University Description if relevant]',
      achievements: [
        'Achieved 98.24% in Pre-University College',
        '[Other achievements if any]'
      ]
    }
  ];

  const allEntries = [...experiences, ...education].sort((a, b) => {
    // Sort by year (newest first)
    const yearA = parseInt(a.duration.split(' - ')[1] === 'Present' ? '2024' : a.duration.split(' - ')[1]);
    const yearB = parseInt(b.duration.split(' - ')[1] === 'Present' ? '2024' : b.duration.split(' - ')[1]);
    return yearB - yearA;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--surface-color)' }}>
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
              Experience & Education
            </h2>
            <div 
              className="w-20 h-1 mx-auto rounded-full mb-4"
              style={{ backgroundColor: 'var(--primary-color)' }}
            />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              My professional journey and educational background, showcasing continuous learning and growth in technology.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div 
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-0.5"
              style={{ backgroundColor: 'var(--border-color)' }}
            />

            {allEntries.map((entry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Icon */}
                <div 
                  className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white transform md:-translate-x-1/2 z-10"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                >
                  {entry.type === 'work' ? (
                    <FaBriefcase size={14} />
                  ) : (
                    <FaGraduationCap size={14} />
                  )}
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="card">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="mb-2" style={{ color: 'var(--text-primary)' }}>
                        {entry.title || entry.degree}
                      </h3>
                      <h4 className="mb-2" style={{ color: 'var(--primary-color)' }}>
                        {entry.company || entry.institution}
                      </h4>
                      
                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt />
                          <span>{entry.duration}</span>
                        </div>
                        {entry.location && (
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt />
                            <span>{entry.location}</span>
                          </div>
                        )}
                        {entry.grade && (
                          <div className="flex items-center gap-2">
                            <span className="font-medium" style={{ color: 'var(--primary-color)' }}>
                              {entry.grade}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {entry.description}
                    </p>

                    {/* Technologies (for work experience) */}
                    {entry.technologies && (
                      <div className="mb-4">
                        <h5 className="text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                          Technologies Used:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {entry.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs rounded-md"
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
                    )}

                    {/* Achievements */}
                    {entry.achievements && entry.achievements.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium mb-3" style={{ color: 'var(--text-primary)' }}>
                          Key {entry.type === 'work' ? 'Achievements' : 'Highlights'}:
                        </h5>
                        <ul className="space-y-2">
                          {entry.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3">
                              <div 
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: 'var(--primary-color)' }}
                              />
                              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="card">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold mb-2"
                style={{ color: 'var(--primary-color)' }}
              >
                9.42
              </motion.div>
              <p style={{ color: 'var(--text-secondary)' }}>
                Current CGPA
              </p>
            </div>

            <div className="card">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl font-bold mb-2"
                style={{ color: 'var(--primary-color)' }}
              >
                [X]
              </motion.div>
              <p style={{ color: 'var(--text-secondary)' }}>
                Months of Experience
              </p>
            </div>

            <div className="card">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl font-bold mb-2"
                style={{ color: 'var(--primary-color)' }}
              >
                2025
              </motion.div>
              <p style={{ color: 'var(--text-secondary)' }}>
                Expected Graduation
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;