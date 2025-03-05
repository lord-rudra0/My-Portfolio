import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { useTheme } from '../context/ThemeContext';

const ThemeTransition = ({ isTransitioning }) => {
  const { theme } = useTheme();
  
  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ height: '100%', top: '-100%' }}
          animate={{ top: ['0%', '100%'] }}
          exit={{ height: '100%', top: '100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={`fixed left-0 right-0 z-50 ${
            theme === 'dark' ? 'bg-white' : 'bg-black'
          }`}
          style={{ pointerEvents: 'none' }}
        />
      )}
    </AnimatePresence>
  );
};

ThemeTransition.propTypes = {
  isTransitioning: PropTypes.bool.isRequired,
};

export default ThemeTransition; 