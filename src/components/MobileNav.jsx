import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa';
import '../styles/navbar.css';

const MobileNav = ({ links }) => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.includes(path);
  };

  const getIcon = (link) => {
    switch (link) {
      case 'home':
        return <FaHome className="text-xl" />;
      case 'about':
        return <FaUser className="text-xl" />;
      case 'projects':
        return <FaCode className="text-xl" />;
      case 'contact':
        return <FaEnvelope className="text-xl" />;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className="mobile-nav fixed bottom-0 left-0 right-0 bg-black/10 backdrop-blur-lg border-t border-white/10 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-around items-center py-3 px-4">
        {links.map(({ id, link, path }) => (
          <motion.div 
            key={id}
            className="relative flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <RouterLink 
              to={path}
              className={`nav-link flex flex-col items-center ${
                isActive(path) ? 'text-[var(--color-accent)]' : ''
              }`}
            >
              {getIcon(link)}
              <span className="text-xs mt-1 capitalize">{link}</span>
            </RouterLink>
            {isActive(path) && (
              <motion.div
                className="absolute -top-1 left-1/2 w-1 h-1 bg-[var(--color-accent)] rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                style={{ transform: 'translateX(-50%)' }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

MobileNav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MobileNav; 