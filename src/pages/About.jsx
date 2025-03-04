import { motion } from 'framer-motion';
import { content } from '../data/content';
import Education from '../components/Education';
import Skill from '../components/Skill';
import { useTheme } from '../context/ThemeContext';
import BlurText from '../components/ui/ScrollFloat';
import { VelocityScroll } from "../components/magicui/scroll-based-velocity"
import ContactCTA from '../components/ContactCTA';
// import { TextReveal } from '../components/ui/text-reveal';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

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
        </motion.div>

        <Education />

        <div className="mt-20">
          <h1 className="text-4xl font-bold mb-12 text-center text-white">Skills</h1>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-16">
            <div className="w-full flex flex-col gap-[2px]">
              {/* Top animated line */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>

              <VelocityScroll numRows={1} defaultVelocity={0.5}>
                <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} text-4xl`}>
                  Velocity ✧ Scroll ✧ C ✧ CSharp ✧ Java ✧ CSS3 ✧ JavaScript ✧ HTML5 ✧ Python ✧ AssemblyScript ✧ TypeScript ✧
                  Vercel ✧ Render ✧ Netlify ✧ Heroku ✧ Firebase ✧ Bootstrap ✧ EJS ✧ ExpressJS ✧ FastAPI ✧ Flask ✧ Jinja ✧
                  NodeDotJS ✧ NPM ✧ React ✧ Vite ✧ TailwindCSS ✧ MongoDB ✧ MySQL ✧ SQLite ✧ Figma ✧ Canva ✧ NumPy ✧ Pandas ✧
                  TensorFlow ✧ Git ✧ GitHub ✧ Unity ✧ Postman ✧ Docker
                </span>
              </VelocityScroll>

              {/* Bottom animated line */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
            </div>

            <div className="w-full mt-16">
              <Skill />
            </div>

            <div className="w-full flex flex-col gap-[2px] mt-16">
              {/* Top animated line */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>

              <VelocityScroll numRows={1} defaultVelocity={-0.5}>
                <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} text-4xl`}>
                  Velocity ✧ Scroll ✧ C ✧ CSharp ✧ Java ✧ CSS3 ✧ JavaScript ✧ HTML5 ✧ Python ✧ AssemblyScript ✧ TypeScript ✧
                  Vercel ✧ Render ✧ Netlify ✧ Heroku ✧ Firebase ✧ Bootstrap ✧ EJS ✧ ExpressJS ✧ FastAPI ✧ Flask ✧ Jinja ✧
                  NodeDotJS ✧ NPM ✧ React ✧ Vite ✧ TailwindCSS ✧ MongoDB ✧ MySQL ✧ SQLite ✧ Figma ✧ Canva ✧ NumPy ✧ Pandas ✧
                  TensorFlow ✧ Git ✧ GitHub ✧ Unity ✧ Postman ✧ Docker
                </span>
              </VelocityScroll>

              {/* Bottom animated line */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

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

export default About;