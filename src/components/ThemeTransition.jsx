import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';

const ThemeTransition = ({ isTransitioning }) => {
  const { theme } = useTheme();
  
  const variants = {
    darkMode: {
      initial: { 
        height: '120%', 
        top: '-110%',
        scale: 1.2,
        rotate: -2,
        skewY: 2
      },
      animate: { 
        top: ['0%', '100%'],
        scale: [1.2, 1.1, 1],
        rotate: [-2, 0],
        skewY: [2, 0]
      },
      exit: { 
        height: '120%', 
        top: '100%',
        scale: 1,
        rotate: 0,
        skewY: 0
      }
    },
    lightMode: {
      initial: { 
        height: '120%', 
        bottom: '-110%',
        scale: 1.2,
        rotate: 2,
        skewY: -2
      },
      animate: { 
        bottom: ['0%', '100%'],
        scale: [1.2, 1.1, 1],
        rotate: [2, 0],
        skewY: [-2, 0]
      },
      exit: { 
        height: '120%', 
        bottom: '100%',
        scale: 1,
        rotate: 0,
        skewY: 0
      }
    }
  };

  const currentVariant = theme === 'dark' ? 'darkMode' : 'lightMode';
  
  return (
    <AnimatePresence>
      {isTransitioning && (
        <>
          <motion.div
            initial={variants[currentVariant].initial}
            animate={variants[currentVariant].animate}
            exit={variants[currentVariant].exit}
            transition={{ 
              duration: 1.2,
              ease: [0.645, 0.045, 0.355, 1], // Custom cubic bezier for ultra-smooth motion
              times: [0, 0.8, 1], // Control timing of scale animation
              scale: {
                duration: 1.2,
                ease: [0.34, 1.56, 0.64, 1], // Springy scale effect
                times: [0, 0.6, 1]
              },
              rotate: {
                duration: 1.2,
                ease: [0.34, 1.56, 0.64, 1]
              },
              skewY: {
                duration: 1.2,
                ease: [0.34, 1.56, 0.64, 1]
              }
            }}
            className={`fixed left-0 right-0 z-50 ${
              theme === 'dark' ? 'bg-white' : 'bg-black'
            }`}
            style={{ 
              pointerEvents: 'none',
              transformOrigin: theme === 'dark' ? 'top' : 'bottom',
              boxShadow: theme === 'dark' 
                ? '0 0 30px 10px rgba(255,255,255,0.2)' 
                : '0 0 30px 10px rgba(0,0,0,0.2)'
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, times: [0, 0.5, 1] }}
            className={`fixed inset-0 z-40 ${
              theme === 'dark' ? 'bg-white' : 'bg-black'
            }`}
            style={{ pointerEvents: 'none' }}
          />
        </>
      )}
    </AnimatePresence>
  );
};

ThemeTransition.propTypes = {
  isTransitioning: PropTypes.bool.isRequired,
};

export default ThemeTransition; 