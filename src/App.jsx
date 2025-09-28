import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import EducationPage from './pages/EducationPage';
import Footer from './components/Footer';
import ThemeTransition from './components/ThemeTransition';
import ProjectDetails from './components/ProjectDetails';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<EducationPage />} />
        {/* <Route path="/:projectName" element={<ProjectDetails />} /> */}
        <Route path="/project/:projectName" element={<ProjectDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const { isTransitioning } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative z-0 bg-primary transition-colors duration-300 dark:bg-black light:bg-white">
        <ThemeTransition isTransitioning={isTransitioning} />
        <Navbar />
        <ScrollProgress />
        <main className="flex-grow">
          <div className="w-full">
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
              <AnimatedRoutes />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;