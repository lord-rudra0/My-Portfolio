import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle