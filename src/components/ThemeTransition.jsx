import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';

const ThemeTransition = ({ isTransitioning }) => {
  const { theme } = useTheme();
  
  const variants = {
    darkMode: {
      initial: { 
        height: '100%', 
        top: '-100%',
        scale: 1.1
      },
      animate: { 
        top: ['0%', '100%'],
        scale: [1.1, 1]
      },
      exit: { 
        height: '100%', 
        top: '100%',
        scale: 1
      }
    },
    lightMode: {
      initial: { 
        height: '100%', 
        bottom: '-100%',
        scale: 1.1
      },
      animate: { 
        bottom: ['0%', '100%'],
        scale: [1.1, 1]
      },
      exit: { 
        height: '100%', 
        bottom: '100%',
        scale: 1
      }
    }
  };

  const currentVariant = theme === 'dark' ? 'darkMode' : 'lightMode';
  
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={variants[currentVariant].initial}
          animate={variants[currentVariant].animate}
          exit={variants[currentVariant].exit}
          transition={{ 
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1], // Custom easing function for smooth motion
            scale: {
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1] // Custom spring-like easing for scale
            }
          }}
          className={`fixed left-0 right-0 z-50 ${
            theme === 'dark' ? 'bg-white' : 'bg-black'
          }`}
          style={{ 
            pointerEvents: 'none',
            transformOrigin: theme === 'dark' ? 'top' : 'bottom'
          }}
        />
      )}
    </AnimatePresence>
  );
};

ThemeTransition.propTypes = {
  isTransitioning: PropTypes.bool.isRequired,
};

export default ThemeTransition; 