import { motion, useScroll, useTransform } from 'framer-motion';
// import { MdEmail } from 'react-icons/md';
import { content } from '../data/content';
import { Link as RouterLink } from 'react-router-dom';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { WordRotate } from './ui/WordRotate';
import   TypingAnimation  from './magicui/typing-animation';

const Hero = () => {
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Add a variable to determine screen size
  const isLargeScreen = window.matchMedia('(min-width: 768px)').matches;

  const lineAnimation = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { duration: 1, ease: "easeInOut", delay: 0.4 }
    }
  };

  const handleKnowMeBetterClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`${isLargeScreen ? 'h-screen' : 'mt-2 pt-2 mb-10 '} w-full overflow-hidden relative mt-4`}>
      <div className="max-w-screen-xl mx-auto flex flex-col justify-start h-full px-4 md:px-12">
        <motion.div 
          className="flex flex-col items-start text-left max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y, opacity }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold leading-tight mt-0 pt-0" style={{ fontFamily: 'Clash Display, sans-serif' }}>
              <TypingAnimation 
                className="namaste-text hero-accent mt-2 pt-2"
                delay={300}
                duration={150}
              >
                {isLargeScreen ? "🙏Namaste! Rudra Pratap Singh, Here" : "🙏Namaste! Rudra P.S. Here"}
              </TypingAnimation>
              <div className="items-center">
                <span className="hero-heading">Innovative purpose driven</span>
                <div className="">
                  <WordRotate words={["Web developer ", "App developer"]} className="hero-heading hero-accent" />
                </div>
                <span className='hero-heading'> crafting scalable solutions.</span>
              </div>
            </h2>
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-end gap-8">
          <div className="w-full flex items-center justify-end gap-8">
            <motion.div 
              className="w-32 h-[1px] bg-[var(--color-accent)] opacity-50 hidden md:block"
              initial="hidden"
              animate="visible"
              variants={lineAnimation}
            />
            <motion.div 
              className="hero-description text-lg md:text-xl max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className='hero-description'>
                A passionate web developer who thrives on problem-solving and building scalable, impactful solutions. 
                With a strong foundation in mathematics, I create sustainable systems that drive innovation.
              </p>
            </motion.div>
          </div>

          <div className="w-full flex justify-between items-center">
            <motion.div 
              className="hidden md:flex items-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {['LINKEDIN', 'GITHUB', 'INSTAGRAM', 'GMAIL'].map((link, index) => (
                <motion.a
                  key={index}
                  href={content.contact.social[link.toLowerCase()]}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <span>{link}</span>
                  <span>↗</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mx-auto md:mx-0"
            >
              <RouterLink 
                to="/about"
                onClick={handleKnowMeBetterClick}
                className="know-me-button"
              >
                <InteractiveHoverButton 
                  className="know-more-btn inline-flex items-center transition-all duration-300 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm"
                >
                  Know me better
                </InteractiveHoverButton>
              </RouterLink>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
