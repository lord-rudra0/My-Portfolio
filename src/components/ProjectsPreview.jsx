import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';

const ProjectsPreview = ({ projects }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const isActive = (path) => {
    return window.location.pathname === path; // Example logic
  };

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-secondary mb-8">Check out some of my recent work</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects && projects.length > 0 ? (
              projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`transition-opacity duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50' : 'opacity-100'}`}
                >
                  <ProjectCard 
                    project={project} 
                    index={index} 
                    isActive={isActive} 
                    onHover={() => handleHover(index)}
                  />
                </motion.div>
              ))
            ) : (
              <p>No projects available.</p>
            )}
          </div>
          <InteractiveHoverButton className="know-more-btn inline-flex items-center transition-all duration-300 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
            <Link to="/projects">View All Projects</Link>
          </InteractiveHoverButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;