import { motion } from 'framer-motion';

const ProjectCard = ({ project, index, isActive, onHover }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-tertiary rounded-lg overflow-hidden relative group transition-transform duration-300 transform hover:scale-105"
      onMouseEnter={onHover}
      onMouseLeave={() => onHover(false)} // Reset on mouse leave
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-3 py-1 bg-blue-600 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Live Demo
            </a>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-primary transition-colors"
            >
              View Code
            </a>
          </div>
          {/* Green Dot Indicator */}
          {isActive(project.path) && (
            <motion.div
              className="w-2 h-2 bg-[var(--color-accent)] rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              style={{ marginTop: '-5px' }}
            />
          )}
        </div>
      </div>
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="p-6 text-white">
          <p className="text-gray-200 mb-4">
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard; 