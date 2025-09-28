import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Education from '../components/Education';

const EducationPage = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-black'}`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 pt-8">
        <h1 className="text-4xl font-bold mb-6 text-left">Education</h1>
        <div className="mb-8">
          <Education />
        </div>
      </div>
    </motion.div>
  );
};

export default EducationPage;
