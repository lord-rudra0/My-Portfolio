import { motion } from 'framer-motion';
import { content } from '../data/content';
import Education from '../components/Education';
import AboutPreview from '../components/AboutPreview';
import ClickSpark from '../components/ClickSpark';

const About = () => {
  const { about } = content;

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
        <AboutPreview />
      </motion.div>
    </div>
  );
};

export default About;