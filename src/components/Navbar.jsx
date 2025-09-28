// import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logoImg from '../assets/react.svg';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import PillNav from './PillNav';
import '../styles/navbar.css';

const Navbar = () => {
  // const [nav, setNav] = useState(false);
  const location = useLocation();

  const links = [
    { id: 1, label: 'home', href: '/' },
    { id: 2, label: 'about', href: '/about' },
    { id: 3, label: 'projects', href: '/projects' },
    { id: 4, label: 'contact', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.includes(href.replace('/',''));
  };

  return (
    <div className="fixed w-full top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[var(--color-accent,#10b981)] flex items-center justify-center text-white font-bold">RPS</div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <PillNav
              logo={logoImg}
              items={links.map(l => ({ label: l.label, href: l.href }))}
              activeHref={links.find(l => isActive(l.href))?.href || '/'}
              className="pill-nav-inline"
            />
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-green-400 to-teal-400 text-black shadow-lg hover:opacity-95"
              aria-label="Open resume"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;