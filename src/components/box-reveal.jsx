import { motion } from 'framer-motion';

const BoxReveal = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default BoxReveal; 