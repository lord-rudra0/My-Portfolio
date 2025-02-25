// import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  // const [nav, setNav] = useState(false);
  // const { theme } = useTheme();
  const { scrollY } = useScroll();
  const location = useLocation();
  
  const headerHeight = useTransform(scrollY, [0, 100], ['6rem', '3rem']);
  const boxWidth = useTransform(scrollY, [0, 100], ['100%', '70%']);
  const boxPadding = useTransform(scrollY, [0, 100], ['0 3rem', '0.75rem']);
  const boxBg = useTransform(scrollY, [0, 100], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.05)']);
  const boxBorder = useTransform(scrollY, [0, 100], ['0px', '1px']);
  const itemSpacing = useTransform(scrollY, [0, 100], [40, 20]);
  const logoMargin = useTransform(scrollY, [0, 100], ['0 4rem', '0 0.75rem']);
  const blur = useTransform(scrollY, [0, 100], [0, 8]);

  const links = [
    { id: 1, link: 'home', path: '/' },
    { id: 2, link: 'about', path: '/about' },
    { id: 3, link: 'projects', path: '/projects' },
    { id: 4, link: 'contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.includes(path);
  };

  return (
    <motion.div 
      style={{ height: headerHeight }}
      className="flex flex-col justify-center items-center w-full fixed z-50 theme-transition mt-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        style={{ 
          width: boxWidth,
          padding: boxPadding,
          backgroundColor: boxBg,
          borderWidth: boxBorder,
          backdropFilter: `blur(${blur}px)`,
        }}
        className="rounded-full flex items-center justify-between border-white/10"
      >
        <motion.div 
          className="flex items-center"
          style={{ margin: logoMargin }}
        >
          <span className="h-8 transition-transform duration-300">
            RPS
          </span>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center"
          style={{ gap: itemSpacing }}
        >
          {links.map(({ id, link, path }) => (
            <motion.div 
              key={id} 
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <RouterLink 
                to={path}
                className={`nav-link capitalize flex items-center justify-center ${
                  isActive(path) ? 'text-[var(--color-accent)]' : ''
                }`}
              >
                {link}
              </RouterLink>
              {isActive(path) && (
                <motion.div
                  className="absolute top-1/2 -right-3 w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  style={{ marginTop: '-4px' }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex items-center"
          style={{ margin: logoMargin }}
        >
          <ThemeToggle />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;