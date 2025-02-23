import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import './ScrollReveal.css';

const ScrollReveal = ({ children, duration = 0.5, delay = 0 }) => {
  const ref = useRef(null);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top < window.innerHeight) {
          element.classList.add('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={ref.current?.classList.contains('visible') ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
