import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
// import Education from '../components/Education';
import ContactCTA from '../components/ContactCTA';
import { content } from '../data/content';
// import Skill from '../components/Skill';
// import { currentProjects, finishedProjects } from "../data/content"
import ProjectCard from "../components/ProjectCard"
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const currentProjects = content.currentProjects;
  console.log(currentProjects);

  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen theme-transition ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-black'} pt-20`}
    >
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Hero />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="mt-20 md:mt-0"
      >
        <AboutPreview />
      </motion.section>

      {/* <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
      <h2 className="text-4xl font-bold text-white mb-0 text-center">Skills</h2>
        <Skill />
      </motion.section> */}

      {/* <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Education />
      </motion.section> */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-white mb-0 text-center">On Going Projects</h2>
        <ProjectCard projects={currentProjects} />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <ContactCTA />
      </motion.section>
    </motion.div>
  );
};

export default Home;