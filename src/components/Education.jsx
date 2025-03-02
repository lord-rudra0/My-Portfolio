import { motion, useScroll, useSpring } from 'framer-motion';
import { content } from '../data/content';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const TimelineItem = ({ item, index, side = 'left' }) => {
  return (
    <motion.div 
      className={`flex ${side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center gap-4 mb-8`}
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div 
        className="w-full md:w-1/2 p-6 bg-tertiary rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
        <p className="text-secondary mb-2">{item.school}</p>
        <p className="text-blue-400">{item.year}</p>
        {item.description && (
          <p className="text-secondary mt-2">{item.description}</p>
        )}
      </motion.div>

      <div className="relative flex items-center justify-center">
        <div className="w-4 h-4 bg-blue-500 rounded-full z-10"></div>
      </div>

      <div className="w-full md:w-1/2"></div>
    </motion.div>
  );
};

TimelineItem.propTypes = {
  item: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired,
  side: PropTypes.oneOf(['left', 'right'])
};

const Education = () => {
  const sectionRef = useRef(null);
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    container: sectionRef
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={sectionRef} className="py-20 bg-primary overflow-hidden">
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-secondary">My academic journey and achievements</p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/20 via-blue-500/50 to-blue-500/20"
            style={{
              scaleY,
              transformOrigin: "top"
            }}
          >
            {/* Shine Effect */}
            <motion.div
              className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-transparent via-blue-400 to-transparent"
              initial={{ y: "-100%" }}
              animate={{
                y: ["0%", "100%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                repeatDelay: 0.5
              }}
            />
          </motion.div>

          {content.education.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              index={index} 
              side={index % 2 === 0 ? 'left' : 'right'} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;