import { motion } from 'framer-motion';
import { content } from '../data/content';
import Education from '../components/Education';
import Skill from '../components/Skill';
import { useTheme } from '../context/ThemeContext';
import BlurText from '../components/ui/ScrollFloat';
import { VelocityScroll } from "../components/magicui/scroll-based-velocity"
import ContactCTA from '../components/ContactCTA';
import SkillsRow from '../components/SkillsRow';
// import { IconCloud } from '../components/magicui/icon-cloud';
// import { IconCloud } from '../components/magicui/icon-cloud';
// import Test from '../components/Education';
// import { TextReveal } from '../components/ui/text-reveal';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Portal/tunnel animation removed per request

const About = () => {
  const { theme } = useTheme();
  const isLargeScreen = window.matchMedia('(min-width: 768px)').matches; // Check for screen size

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen bg-${theme} text-white pt-20 overflow-hidden`}
    >
      <style>
        {`
          .perspective-1000 {
            perspective: 1000px;
          }

          @keyframes pulse {
            0% { transform: translateZ(0) scale(1); }
            100% { transform: translateZ(-20px) scale(0.95); }
          }

          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          .transform-gpu {
            transform: translateZ(0);
            will-change: transform;
          }

          @keyframes glow {
            0% { border-color: rgba(34, 197, 94, 0.3); }
            50% { border-color: rgba(34, 197, 94, 0.6); }
            100% { border-color: rgba(34, 197, 94, 0.3); }
          }

          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes rotateReverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }

          @keyframes innerGlow {
            0% { opacity: 0.3; transform: scale(0.95); }
            100% { opacity: 0.6; transform: scale(1.05); }
          }

          @keyframes particle {
            0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
          }

          @keyframes particleReverse {
            0% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
            100% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          }
        `}
      </style>

  <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold mb-8 text-center mt-16 text-white">About Me</h1>
          <BlurText
            text={content.about.fullBio}
            delay={50}
            animateBy="words"
            direction="top"
            className={`text-2xl mb-8 text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}
            duration={1.0}
          />
        </motion.div>

        <Education />
          {/* <Test /> */}

        <div className="mt-20">
          <h1 className="text-4xl font-bold mb-2 text-center text-white">Skills</h1>
          
          {/* Add the SkillsRow component for smaller screens */}
          <div className="block md:hidden mb-4">
            <SkillsRow />
          </div>

          <div className="relative flex w-full flex-col items-center justify-center mb-16 px-4 md:px-8">
            {/* First Skills Scroll */}
            <div className="w-full flex flex-col gap-[2px] mt-0 mb-0">
              <div className="relative w-full perspective-1000 my-0">
                {/* Portal animations removed per request */}

                {/* VelocityScroll with adjusted z-index */}
                {isLargeScreen && ( // Only render on large screens
                  <div className="relative z-10 transform-gpu">
                    <VelocityScroll 
                      numRows={1} 
                      defaultVelocity={-0.5}
                      className="[mask-image:linear-gradient(to_right,transparent_0%,white_20%,white_80%,transparent_100%)]"
                    >
                      <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} text-4xl px-0 sm:px-0 lg:px-0`}>
                        Velocity ✧ Scroll ✧ C ✧ CSharp ✧ Java ✧ CSS3 ✧ JavaScript ✧ HTML5 ✧ Python ✧ AssemblyScript ✧ TypeScript ✧
                        Vercel ✧ Render ✧ Netlify ✧ Heroku ✧ Firebase ✧ Bootstrap ✧ EJS ✧ ExpressJS ✧ FastAPI ✧ Flask ✧ Jinja ✧
                        NodeDotJS ✧ NPM ✧ React ✧ Vite ✧ TailwindCSS ✧ MongoDB ✧ MySQL ✧ SQLite ✧ Figma ✧ Canva ✧ NumPy ✧ Pandas ✧
                        TensorFlow ✧ Git ✧ GitHub ✧ Unity ✧ Postman ✧ Docker
                      </span>
                    </VelocityScroll>
                  </div>
                )}
              </div>
            </div>

            <div className="">
              <Skill />
            </div>

            {/* Second Skills Scroll */}
            <div className="w-full flex flex-col gap-0">
              <div className="relative w-full perspective-1000 my-0">
                {/* Portal animations removed per request */}

                {/* VelocityScroll for the second skills scroll */}
                {isLargeScreen && ( // Only render on large screens
                  <div className="relative z-10 transform-gpu">
                    <VelocityScroll 
                      numRows={1} 
                      defaultVelocity={-0.5}
                      className="[mask-image:linear-gradient(to_right,transparent_0%,white_20%,white_80%,transparent_100%)]"
                    >
                      <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} text-4xl px-0 sm:px-0 lg:px-0`}>
                        Velocity ✧ Scroll ✧ C ✧ CSharp ✧ Java ✧ CSS3 ✧ JavaScript ✧ HTML5 ✧ Python ✧ AssemblyScript ✧ TypeScript ✧
                        Vercel ✧ Render ✧ Netlify ✧ Heroku ✧ Firebase ✧ Bootstrap ✧ EJS ✧ ExpressJS ✧ FastAPI ✧ Flask ✧ Jinja ✧
                        NodeDotJS ✧ NPM ✧ React ✧ Vite ✧ TailwindCSS ✧ MongoDB ✧ MySQL ✧ SQLite ✧ Figma ✧ Canva ✧ NumPy ✧ Pandas ✧
                        TensorFlow ✧ Git ✧ GitHub ✧ Unity ✧ Postman ✧ Docker
                      </span>
                    </VelocityScroll>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Add the IconCloud component */}
          {/* <div className="flex justify-center items-center mt-0 mb-0">
            <IconCloud 
              images={content.skills.icons} 
              width={300}
              height={300}
              sphereRadius={150}
              className="w-full max-w-[300px] h-auto"
            />
          </div> */}
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