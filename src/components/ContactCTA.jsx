import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const ContactCTA = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleGetInTouchClick = () => {
    scrollToTop();
    navigate('/contact');
  };

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'} rounded-3xl shadow-xl p-8 mx-4 text-center border-2 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
        >
          <h2 className={`text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Let&apos;s Work Together
          </h2>
          <p className={`text-lg mb-6 max-w-xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
          </p>
          <div className="flex justify-center">
            <InteractiveHoverButton className={`know-more-btn inline-flex items-center transition-all duration-300  px-6 py-3 rounded-full backdrop-blur-sm`} onClick={handleGetInTouchClick}>
              Get in Touch
            </InteractiveHoverButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;