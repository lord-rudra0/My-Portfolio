import { motion } from 'framer-motion';
import { content } from '../data/content';
import Education from '../components/Education';
import Skill from '../components/Skill';
import { useTheme } from '../context/ThemeContext';
import BlurText from '../components/ui/ScrollFloat';
import { VelocityScroll } from "../components/magicui/scroll-based-velocity"
import ContactCTA from '../components/ContactCTA';
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

// Add this new CSS at the top of your About.jsx or in your styles
const tunnelStyle = `
  .tunnel-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .tunnel-entrance {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 250px;
    z-index: 20;
    pointer-events: none;
  }

  .tunnel-left {
    left: 0;
    background: radial-gradient(
      ellipse at left,
      var(--color-primary) 0%,
      var(--color-primary) 40%,
      transparent 70%
    );
    transform-origin: left;
    animation: tunnelPulseLeft 3s ease-in-out infinite;
  }

  .tunnel-right {
    right: 0;
    background: radial-gradient(
      ellipse at right,
      var(--color-primary) 0%,
      var(--color-primary) 40%,
      transparent 70%
    );
    transform-origin: right;
    animation: tunnelPulseRight 3s ease-in-out infinite;
  }

  @keyframes tunnelPulseLeft {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(1.1); }
  }

  @keyframes tunnelPulseRight {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(1.1); }
  }

  .glow-line {
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--color-accent) 50%,
      transparent 100%
    );
    opacity: 0.6;
    animation: glowPulse 2s ease-in-out infinite;
  }

  @keyframes glowPulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
`;

const About = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen bg-${theme} text-white pt-20 overflow-hidden`}
    >
      <style>
        {tunnelStyle}
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
          {/* <Test /> */}

        <div className="mt-20">
          <h1 className="text-4xl font-bold mb-12 text-center text-white">Skills</h1>
          <div className="relative flex w-full flex-col items-center justify-center mb-16 px-[100px]">
            {/* First Skills Scroll */}
            <div className="w-full flex flex-col gap-[2px] mt-0 mb-0">
              <div className="relative w-full perspective-1000 my-0">
                {/* Left Portal */}
                <div className="absolute -left-[100px] top-1/2 -translate-y-1/2 w-[100px] h-[100px] z-0 overflow-hidden sm:w-[75px] sm:h-[75px] lg:w-[200px] lg:h-[200px]">
                  <div className="absolute left-[5%] top-0 w-full h-full">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-green-500/30"
                        style={{
                          transform: `translateZ(${i * -10}px) scale(${1 - i * 0.05})`,
                          animation: `
                            pulse ${2 + i * 0.2}s infinite alternate,
                            glow ${3 + i * 0.5}s infinite alternate,
                            rotate ${10 + i}s infinite linear
                          `,
                          boxShadow: `0 0 ${10 + i * 2}px rgba(34, 197, 94, ${0.2 - i * 0.02})`,
                        }}
                      />
                    ))}
                    {/* Inner glow effect */}
                    <div 
                      className="absolute inset-[20%] rounded-full blur-md bg-green-500/10"
                      style={{
                        animation: 'innerGlow 2s infinite alternate'
                      }}
                    />
                    {/* Spinning particles */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-green-500/40 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `rotate(${i * 30}deg) translateX(${50 + (i % 3) * 10}px)`,
                          animation: `particle ${3 + (i % 3)}s infinite linear`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Portal */}
                <div className="absolute -right-[100px] top-1/2 -translate-y-1/2 w-[100px] h-[100px] z-0 overflow-hidden sm:w-[75px] sm:h-[75px] lg:w-[200px] lg:h-[200px]">
                  <div className="absolute right-[5%] top-0 w-full h-full">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-green-500/30"
                        style={{
                          transform: `translateZ(${i * -10}px) scale(${1 - i * 0.05})`,
                          animation: `
                            pulse ${2 + i * 0.2}s infinite alternate,
                            glow ${3 + i * 0.5}s infinite alternate,
                            rotateReverse ${10 + i}s infinite linear
                          `,
                          boxShadow: `0 0 ${10 + i * 2}px rgba(34, 197, 94, ${0.2 - i * 0.02})`,
                        }}
                      />
                    ))}
                    {/* Inner glow effect */}
                    <div 
                      className="absolute inset-[20%] rounded-full blur-md bg-green-500/10"
                      style={{
                        animation: 'innerGlow 2s infinite alternate'
                      }}
                    />
                    {/* Spinning particles */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-green-500/40 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `rotate(${i * 30}deg) translateX(${50 + (i % 3) * 10}px)`,
                          animation: `particleReverse ${3 + (i % 3)}s infinite linear`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* VelocityScroll with adjusted z-index */}
                <div className="relative z-10 transform-gpu">
                  <VelocityScroll 
                    numRows={1} 
                    defaultVelocity={0.5}
                    
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
              </div>
            </div>

            <div className="">
              <Skill />
            </div>

            {/* Second Skills Scroll */}
            <div className="w-full flex flex-col gap-0">
              <div className="relative w-full perspective-1000 my-0">
                {/* Left Portal */}
                <div className="absolute -left-[100px] top-1/2 -translate-y-1/2 w-[100px] h-[100px] z-0 overflow-hidden sm:w-[75px] sm:h-[75px] lg:w-[200px] lg:h-[200px]">
                  <div className="absolute left-[5%] top-0 w-full h-full">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-green-500/30"
                        style={{
                          transform: `translateZ(${i * -10}px) scale(${1 - i * 0.05})`,
                          animation: `
                            pulse ${2 + i * 0.2}s infinite alternate,
                            glow ${3 + i * 0.5}s infinite alternate,
                            rotate ${10 + i}s infinite linear
                          `,
                          boxShadow: `0 0 ${10 + i * 2}px rgba(34, 197, 94, ${0.2 - i * 0.02})`,
                        }}
                      />
                    ))}
                    {/* Inner glow effect */}
                    <div 
                      className="absolute inset-[20%] rounded-full blur-md bg-green-500/10"
                      style={{
                        animation: 'innerGlow 2s infinite alternate'
                      }}
                    />
                    {/* Spinning particles */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-green-500/40 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `rotate(${i * 30}deg) translateX(${50 + (i % 3) * 10}px)`,
                          animation: `particle ${3 + (i % 3)}s infinite linear`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Portal */}
                <div className="absolute -right-[100px] top-1/2 -translate-y-1/2 w-[100px] h-[100px] z-0 overflow-hidden sm:w-[75px] sm:h-[75px] lg:w-[200px] lg:h-[200px]">
                  <div className="absolute right-[5%] top-0 w-full h-full">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-green-500/30"
                        style={{
                          transform: `translateZ(${i * -10}px) scale(${1 - i * 0.05})`,
                          animation: `
                            pulse ${2 + i * 0.2}s infinite alternate,
                            glow ${3 + i * 0.5}s infinite alternate,
                            rotateReverse ${10 + i}s infinite linear
                          `,
                          boxShadow: `0 0 ${10 + i * 2}px rgba(34, 197, 94, ${0.2 - i * 0.02})`,
                        }}
                      />
                    ))}
                    {/* Inner glow effect */}
                    <div 
                      className="absolute inset-[20%] rounded-full blur-md bg-green-500/10"
                      style={{
                        animation: 'innerGlow 2s infinite alternate'
                      }}
                    />
                    {/* Spinning particles */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-green-500/40 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `rotate(${i * 30}deg) translateX(${50 + (i % 3) * 10}px)`,
                          animation: `particleReverse ${3 + (i % 3)}s infinite linear`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* VelocityScroll with adjusted z-index */}
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
              </div>
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