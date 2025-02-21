import { motion } from 'framer-motion';
import { content } from '../data/content';
import ClickSpark from '../components/ClickSpark';
import ProjectCard from '../components/ProjectCard';
import { useState } from 'react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div className="relative">
      <ClickSpark
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-primary text-white py-20"
      >
        <div className="max-w-screen-lg mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-secondary text-lg">
              Here are some of the projects I've worked on
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50' : 'opacity-100'}`}
              >
                <ProjectCard 
                  project={project} 
                  index={index} 
                  isActive={() => window.location.pathname === project.path} 
                  onHover={() => handleHover(index)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;