import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
import ProjectsPreview from '../components/ProjectsPreview';
import Skills from '../components/Skills';
import Education from '../components/Education';
import ContactCTA from '../components/ContactCTA';
import { content } from '../data/content';
import ClickSpark from '../components/ClickSpark';

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

  return (
    <div className="overflow-hidden">
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
      >
        <AboutPreview />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Skills />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Education />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <ProjectsPreview projects={currentProjects} />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <ContactCTA />
      </motion.section>

      <ClickSpark
        sparkSize={10}
        sparkRadius={15}
      />
    </div>
  );
};

export default Home;