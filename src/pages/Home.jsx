import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutPreview from '../components/AboutPreview';
// Swiper for full-page vertical slides
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';
// import Education from '../components/Education';
import ContactCTA from '../components/ContactCTA';
import { content } from '../data/content';
// import Skill from '../components/Skill';
// import { currentProjects, finishedProjects } from "../data/content"
import ProjectCard from "../components/ProjectCard"
import { useTheme } from '../context/ThemeContext';
import SkillsRow from '../components/SkillsRow';
import { useState } from 'react';

const Home = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };


  // Load projects and deduplicate by title (protects against repeated entries in content.js)
  let currentProjects = Array.isArray(content.currentProjects) ? content.currentProjects.slice() : [];
  const seenTitles = new Set();
  // Simple normalizer: lowercase, remove non-alphanumerics, collapse whitespace
  const normalize = (s = '') =>
    s
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

  currentProjects = currentProjects.filter((p) => {
    const key = normalize(p.title || p.projectName || '');
    if (!key) return false;
    if (seenTitles.has(key)) return false;
    seenTitles.add(key);
    return true;
  });

  // Split projects into pages of 4 so remaining projects appear on subsequent slides
  const projectsPerPage = 4;
  const projectPages = [];
  for (let i = 0; i < currentProjects.length; i += projectsPerPage) {
    projectPages.push(currentProjects.slice(i, i + projectsPerPage));
  }

  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const contactIndex = 3 + projectPages.length; // Hero(0), About(1), Skills(2), Projects pages start at 3

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen theme-transition ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-black'}`}
    >
  {/* ARIA live region to announce slide changes to assistive tech */}
  <div aria-live="polite" className="sr-only">Slide {activeIndex + 1} of {4 + projectPages.length}</div>

      <Swiper
        modules={[Mousewheel, Keyboard]}
        direction="vertical"
        slidesPerView={1}
        speed={700}
        mousewheel={{ forceToAxis: true, sensitivity: 0.65, releaseOnEdges: true }}
        keyboard={{ enabled: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        style={{ height: '100vh' }}
      >
        <SwiperSlide>
          <div role="region" aria-label="Hero section" className="min-h-screen flex items-center justify-center">
            <motion.section
              initial="hidden"
              animate={activeIndex === 0 ? 'visible' : 'hidden'}
              variants={sectionVariants}
              className="w-full"
            >
              <Hero />
            </motion.section>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div role="region" aria-label="About section" className="min-h-screen flex items-center justify-center">
            <motion.section
              initial="hidden"
              animate={activeIndex === 1 ? 'visible' : 'hidden'}
              variants={sectionVariants}
              className="w-full mt-0 md:mt-0"
            >
              <AboutPreview />
            </motion.section>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div role="region" aria-label="Skills section" className="min-h-screen flex items-center justify-center">
            <motion.section
              initial="hidden"
              animate={activeIndex === 2 ? 'visible' : 'hidden'}
              variants={sectionVariants}
              className="w-full"
            >
              <h1 className="text-4xl font-bold mb-2 text-center text-white">Skills</h1>
              <div className="mb-20">
                <SkillsRow />
              </div>
            </motion.section>
          </div>
        </SwiperSlide>

        {projectPages.map((pageProjects, pageIndex) => (
          <SwiperSlide key={`projects-page-${pageIndex}`}>
            {/* Make each projects page slide scrollable */}
            <div role="region" aria-label={`Projects page ${pageIndex + 1}`} className="min-h-screen flex items-start justify-center overflow-auto">
              <motion.section
                initial="hidden"
                animate={activeIndex === 3 + pageIndex ? 'visible' : 'hidden'}
                variants={sectionVariants}
                className="w-full pt-12"
                style={{ maxHeight: 'calc(100vh - 5rem)', overflow: 'auto', overscrollBehavior: 'contain', paddingBottom: '2rem' }}
              >
                <h2 className="text-4xl font-bold text-white mb-0 text-center">On Going Projects</h2>
                <ProjectCard projects={pageProjects} />
              </motion.section>
            </div>
          </SwiperSlide>
        ))}

        <SwiperSlide>
          <div role="region" aria-label="Contact section" className="min-h-screen flex items-center justify-center">
            <motion.section
              initial="hidden"
              animate={activeIndex === contactIndex ? 'visible' : 'hidden'}
              variants={sectionVariants}
              className="w-full"
            >
              <ContactCTA />
            </motion.section>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default Home;