import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { currentProjects, finishedProjects } from '../data/content';

export default function ProjectDetails() {
  const { projectName } = useParams();
  const { theme } = useTheme();

  // Combine current and finished projects
  const allProjects = [...currentProjects, ...finishedProjects];
  
  const project = allProjects.find(p => 
    p.projectName === projectName || 
    p.title.toLowerCase().replace(/ /g, "-") === projectName
  );

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen py-20 px-4 md:px-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-6"
        >
          {project.title}
        </motion.h1>

        {/* Project Description */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={`mb-8 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
        >
          {project.longDescription || project.description}
        </motion.div>

        {/* Technologies Used */}
        {project.technologies && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-gray-200' 
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Project Images */}
        {project.images ? (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={typeof image === 'string' ? image : image.url}
                  alt={typeof image === 'string' ? `Project image ${index + 1}` : image.alt || `Project image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {typeof image !== 'string' && image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 text-white text-sm">
                    {image.caption}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="aspect-video rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={project.src || project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        {/* Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex gap-4"
        >
          {(project.demoUrl || project.ctaLink) && (
            <a
              href={project.demoUrl || project.ctaLink}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
            >
              View Demo
            </a>
          )}
          {(project.codeUrl || project.githubRepo) && (
            <a
              href={project.codeUrl || project.githubRepo}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
            >
              View Code
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
} 