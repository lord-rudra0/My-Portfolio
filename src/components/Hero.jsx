import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { content } from '../data/content';
import { Link } from 'react-router-dom';
import ClickSpark from './ClickSpark';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { WordRotate } from './ui/WordRotate';

const Hero = () => {
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const lineAnimation = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { duration: 1, ease: "easeInOut", delay: 0.4 }
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden relative">
      <ClickSpark
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      />
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center h-full px-4 md:px-12">
        <motion.div 
          className="flex flex-col items-start text-left max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ y, opacity }}
        >
         

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-1">

              <span className="hero-accent namaste-text">🙏Namaste! </span>
              <span className="hero-heading" style={{ marginLeft: '1rem' }}>It&apos;s me,
              <span className="mx-2" />
               <spam className="hero-accent">Rudra</spam>
               <span className="mx-2" /> Pratap <span className="mx-2" />
               <spam className="hero-accent">Singh</spam>
              </span>
              <span className="hero-heading" style={{ marginLeft: '1rem' }}>I am <span className="mx-2" />
            <WordRotate words={["Web", "App"]} className="text-8xl" /> <span className="mx-2" />Developer</span>
            </h2>
          </motion.div>
         
        </motion.div>

        <div className="flex flex-col items-end gap-8">
          <div className="w-full flex items-center justify-end gap-8">
            <motion.div 
              className="w-32 h-[1px] bg-[var(--color-accent)] opacity-50"
              initial="hidden"
              animate="visible"
              variants={lineAnimation}
            />
            <motion.div 
              className="hero-description text-lg md:text-xl max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p>
              A passionate web developer who thrives on problem-solving and building scalable, impactful solutions. 
              With a strong foundation in mathematics, I create sustainable systems that drive innovation.
               
              </p>
            </motion.div>
          </div>

          <div className="w-full flex justify-between items-center">
            <motion.div 
              className="flex items-center space-x-4"
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
            >
              <InteractiveHoverButton
                className="know-more-btn inline-flex items-center transition-all duration-300 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm"
              >
                Know me better
              </InteractiveHoverButton>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
