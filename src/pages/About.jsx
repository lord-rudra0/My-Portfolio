import { motion } from 'framer-motion';
import { content } from '../data/content';
import Education from '../components/Education';
import Skill from '../components/Skill';
import { useTheme } from '../context/ThemeContext';
import BlurText from '../components/ui/ScrollFloat';

const About = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen bg-${theme} text-white pt-20`}
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-8 text-center mt-16 text-white">About Me</h1>
          <BlurText
                text={content.about.fullBio}
                delay={150}
                animateBy="words"
                direction="top"
                className={`text-2xl mb-8 text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}
              /> 

          {/* <div className="text-secondary text-lg space-y-6">
            {about.fullBio.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div> */}
        </motion.div>

        <Education />

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            {about.experience.map((exp, index) => (
              <motion.div 
                key={index} 
                className="border-l-2 border-blue-600 pl-6"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-secondary">{exp.company} | {exp.period}</p>
                <p className="mt-2">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        <h1 className="text-4xl font-bold mb-8 text-center mt-16 text-white">Skills</h1>

        <Skill />
      </div>
    </motion.div>
  );
};

export default About;