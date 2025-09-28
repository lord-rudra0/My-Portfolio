// import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import MobileNav from './MobileNav';
import '../styles/navbar.css';

const Navbar = () => {
  // const [nav, setNav] = useState(false);
  // const { theme } = useTheme();
  const { scrollY } = useScroll();
  const location = useLocation();
  
  // Check for screen size
  const isLargeScreen = window.matchMedia('(min-width: 768px) and (min-height: 600px)').matches;

  // Call useTransform unconditionally to satisfy React hooks rules.
  const headerHeightTransform = useTransform(scrollY, [0, 100], ['6rem', '3rem']);
  const boxWidthTransform = useTransform(scrollY, [0, 100], ['100%', '70%']);
  const boxPaddingTransform = useTransform(scrollY, [0, 100], ['0 3rem', '0.75rem']);
  const boxBgTransform = useTransform(scrollY, [0, 100], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.05)']);
  const boxBorderTransform = useTransform(scrollY, [0, 100], ['0px', '1px']);
  const itemSpacingTransform = useTransform(scrollY, [0, 100], [40, 20]);
  const logoMarginTransform = useTransform(scrollY, [0, 100], ['0 4rem', '0 0.75rem']);
  const blurTransform = useTransform(scrollY, [0, 100], [0, 8]);

  // Select either the transform (motion value) for large screens or static fallbacks for small screens
  const headerHeight = isLargeScreen ? headerHeightTransform : '3rem';
  const boxWidth = isLargeScreen ? boxWidthTransform : '100%';
  const boxPadding = isLargeScreen ? boxPaddingTransform : '0.75rem';
  const boxBg = isLargeScreen ? boxBgTransform : 'rgba(255,255,255,0.05)';
  const boxBorder = isLargeScreen ? boxBorderTransform : '1px';
  const itemSpacing = isLargeScreen ? itemSpacingTransform : 20;
  const logoMargin = isLargeScreen ? logoMarginTransform : '0 0.75rem';
  const blur = isLargeScreen ? blurTransform : 8;

  const links = [
    { id: 1, link: 'home', path: '/' },
    { id: 2, link: 'about', path: '/about' },
    { id: 2.5, link: 'education', path: '/education' },
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
    <>
      <motion.div 
        style={{ height: headerHeight }}
        className="flex flex-col justify-center items-center w-full fixed top-0 z-50 theme-transition"
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
            maxWidth: '1400px',
            margin: '0 auto',
          }}
          className="rounded-full flex items-center border-white/10 relative w-full mx-4"
        >
          <motion.div 
            className="flex items-center"
            style={{ margin: logoMargin }}
          >
            <span className="h-8">RPS</span>
          </motion.div>

          <motion.div 
            className="desktop-nav items-center justify-center mx-auto"
            style={{ gap: itemSpacing }}
          >
            {links.map(({ id, link, path }) => (
              <motion.div 
                key={id} 
                className="relative"
                whileHover={isLargeScreen ? { scale: 1.1 } : {}}
                whileTap={isLargeScreen ? { scale: 0.95 } : {}}
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
                    initial={isLargeScreen ? { scale: 0 } : { scale: 1 }}
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
            className="flex items-center absolute right-4"
          >
            <div className="scale-75 md:scale-100">
              <ThemeToggle />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile Navigation */}
      <MobileNav links={links} />
    </>
  );
};

export default Navbar;