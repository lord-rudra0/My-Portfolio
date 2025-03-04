import { motion } from 'framer-motion';
import { content } from '../data/content';
import ProjectCard from '../components/ProjectCard';
import ContactCTA from '../components/ContactCTA';
// import { useState } from 'react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};


const Projects = () => {
  // const [hoveredIndex, setHoveredIndex] = useState(null);
  const finishedProjects = content.finishedProjects;

  // const handleHover = (index) => {
  //   setHoveredIndex(index);
  // };

  return (
    <div className="relative">
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
            <h1 className="text-4xl font-bold mb-4 text-center text-white mt-10">My Finished Projects</h1>
            <p className="text-secondary text-lg">
              Here are some of the projects I&#39;ve worked on
            </p>
          </motion.div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {finishedProjects.map((project, index) => (
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
          </div> */}
          <section>
            {/* <h2 className="text-3xl font-bold mb-6 text-center"> Projects</h2> */}
            <ProjectCard projects={finishedProjects} />
          </section>
          
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <ContactCTA />
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;