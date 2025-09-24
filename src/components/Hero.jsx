import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
// import { MdEmail } from 'react-icons/md';
import { content } from '../data/content';
import { Link as RouterLink } from 'react-router-dom';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { WordRotate } from './ui/WordRotate';
import TypingAnimation from './magicui/typing-animation';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const { scrollY } = useScroll();
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Move springConfig definition before it's used
  const springConfig = { damping: 15, stiffness: 150 };
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useSpring(1, springConfig);

  // Parallax effect for different elements
  const titleY = useTransform(scrollY, [0, 300], [0, -50]);
  const descriptionY = useTransform(scrollY, [0, 300], [0, -30]);
  const socialsY = useTransform(scrollY, [0, 300], [0, -20]);

  // Add a variable to determine screen size
  const isLargeScreen = window.matchMedia('(min-width: 768px)').matches;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      mouseX.set(x - width / 2);
      mouseY.set(y - height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // removed tilt interaction: no rotateX/rotateY transforms to disable hover tilt

  const lineAnimation = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { duration: 1, ease: "easeInOut", delay: 0.4 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0.5, 0.3, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // const floatingAnimation = {
  //   initial: { y: 0 },
  //   animate: {
  //     y: [-5, 5, -5],
  //     transition: {
  //       duration: 4,
  //       repeat: Infinity,
  //       ease: "easeInOut"
  //     }
  //   }
  // };

  const socialLinkVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    },
    hover: {
      scale: 1.1,
      color: "var(--color-accent)",
      transition: { duration: 0.2 }
    }
  };

  const handleKnowMeBetterClick = () => {
    scale.set(0.95);
    setTimeout(() => scale.set(1), 150);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      className={`${isLargeScreen ? 'h-screen flex items-center' : 'mt-2 pt-2 mb-10'} w-full overflow-hidden relative`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Enhanced Background Glow Effect */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(var(--color-accent-rgb), 0.15), transparent 70%)',
          filter: 'blur(100px)',
          transform: 'translateZ(0)',
        }}
      />

      <div 
        ref={containerRef}
        className="max-w-6xl mx-auto flex flex-col justify-center h-full px-6 md:px-8 relative w-full hero-container"
        style={{
          '--mouse-x': `${mouseX.get()}px`,
          '--mouse-y': `${mouseY.get()}px`
        }}
      >
        <motion.div 
          className="flex flex-col items-start text-left max-w-4xl w-full"
          style={{ 
            y: titleY,
            opacity,
            perspective: 1000
          }}
        >
          <motion.div 
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold leading-tight mt-0 pt-0" 
              style={{ fontFamily: 'Clash Display, sans-serif' }}
              // variants={floatingAnimation}
              initial="initial"
              animate="animate"
            >
              <TypingAnimation 
                className="namaste-text hero-accent mt-2 pt-2"
                delay={300}
                duration={150}
              >
                {isLargeScreen ? "🙏Namaste! Rudra Pratap Singh, Here" : "🙏Namaste! Rudra P.S. Here"}
              </TypingAnimation>
              <motion.div 
                className="items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <motion.span 
                  className="hero-heading"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  Innovative purpose driven
                </motion.span>
                <div className="relative">
                  <WordRotate words={["Web developer ", "App developer"]} className="hero-heading hero-accent" />
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-xl"
                    animate={{
                      opacity: [0.5, 0.3, 0.5],
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                <motion.span 
                  className='hero-heading'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 }}
                >
                  crafting scalable solutions.
                </motion.span>
              </motion.div>
            </motion.h2>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col items-end gap-8 relative"
          style={{ y: descriptionY }}
        >
          <div className="w-full flex items-center justify-end gap-8">
            <motion.div 
              className="w-32 h-[1px] bg-[var(--color-accent)] opacity-50 hidden md:block"
              initial="hidden"
              animate="visible"
              variants={lineAnimation}
            />
            <motion.div 
              className="hero-description text-lg md:text-xl max-w-2xl relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg blur-lg"
                animate={{
                  opacity: [0.3, 0.15, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <p className='hero-description relative z-10'>
                A passionate web developer who thrives on problem-solving and building scalable, impactful solutions. 
                With a strong foundation in mathematics, I create sustainable systems that drive innovation.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="w-full flex justify-between items-center"
            style={{ y: socialsY }}
          >
            <motion.div 
              className="hidden md:flex items-center space-x-4"
              variants={socialLinkVariants}
              initial="initial"
              animate="animate"
            >
              {['LINKEDIN', 'GITHUB', 'INSTAGRAM', 'GMAIL'].map((link, index) => (
                <motion.a
                  key={index}
                  href={content.contact.social[link.toLowerCase()]}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link relative group"
                  variants={socialLinkVariants}
                  whileHover="hover"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                    animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">{link}</span>
                  <motion.span
                    className="relative z-10"
                    animate={{ 
                      x: [0, 4, 0],
                      y: [0, -4, 0]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ↗
                  </motion.span>
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
                className="know-me-button relative group"
              >
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                  whileHover={{ scale: 1.1 }}
                />
                <InteractiveHoverButton 
                  className="know-more-btn inline-flex items-center transition-all duration-300 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm relative z-10"
                >
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    Know me better
                  </motion.span>
                </InteractiveHoverButton>
              </RouterLink>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
