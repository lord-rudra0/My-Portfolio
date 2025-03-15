import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { currentProjects, finishedProjects } from '../data/content';
import { useEffect, useRef } from 'react';

export default function ProjectDetails() {
  const { projectName } = useParams();
  const { theme } = useTheme();
  const containerRef = useRef(null);

  // Combine current and finished projects
  const allProjects = [...currentProjects, ...finishedProjects];
  
  const project = allProjects.find(p => 
    p.projectName === projectName || 
    p.title.toLowerCase().replace(/ /g, "-") === projectName
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        >
          <h1 className="text-3xl font-bold mb-4">No Project Available</h1>
          <p className="text-lg text-gray-500">This project does not exist or has no content.</p>
        </motion.div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen py-20 px-4 md:px-8 ${theme === 'dark' ? 'text-white bg-gradient-to-b from-black to-gray-900' : 'text-black bg-gradient-to-b from-white to-gray-50'}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div className="space-y-8">
          <motion.h1 
            variants={itemVariants}
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mt-10"
          >
            {project.title}
          </motion.h1>

          {/* Project Description */}
          <motion.div
            variants={itemVariants}
            className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} 
              backdrop-blur-sm p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} 
              shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            {project.longDescription || project.description}
          </motion.div>

          {/* Technologies Used */}
          {project.technologies && (
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} 
                backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
                    className={`px-4 py-2 rounded-full text-sm font-medium 
                      ${theme === 'dark' 
                        ? 'bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-gray-200 border border-gray-700' 
                        : 'bg-gradient-to-r from-purple-100 to-blue-100 text-gray-800 border border-gray-200'
                      } hover:shadow-lg transition-all duration-300`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Project Images */}
          {project.images ? (
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`relative aspect-video rounded-xl overflow-hidden shadow-lg 
                    ${theme === 'dark' ? 'shadow-purple-500/10' : 'shadow-blue-500/10'}
                    hover:shadow-2xl transition-all duration-500 group`}
                >
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={typeof image === 'string' ? image : image.url}
                    alt={typeof image === 'string' ? `Project image ${index + 1}` : image.alt || `Project image ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {typeof image !== 'string' && image.caption && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                    >
                      <p className="text-white text-sm font-medium">{image.caption}</p>
                    </motion.div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="aspect-video rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={project.src || project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          )}

          {/* Links */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            {(project.demoUrl || project.ctaLink) && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.demoUrl || project.ctaLink}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-green-500 to-emerald-600 
                  text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 
                  transition-all duration-300"
              >
                View Demo
              </motion.a>
            )}
            {(project.codeUrl || project.githubRepo) && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.codeUrl || project.githubRepo}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 
                  text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 
                  transition-all duration-300"
              >
                View Code
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
} 