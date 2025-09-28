import { motion } from 'framer-motion';
import { content } from '../data/content';
import ProjectCard from '../components/ProjectCard';
import ContactCTA from '../components/ContactCTA';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';
import { useState, useEffect } from 'react';


const Projects = () => {
  const finishedProjects = content.finishedProjects || [];
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const projectsPerPage = isMobile ? 2 : 4;
  const pages = [];
  for (let i = 0; i < finishedProjects.length; i += projectsPerPage) {
    pages.push(finishedProjects.slice(i, i + projectsPerPage));
  }

  const totalSlides = pages.length + 1; // project pages + Contact

  useEffect(() => {
    const ev = new CustomEvent('aboutSlideChange', { detail: { activeIndex, totalSlides } });
    window.dispatchEvent(ev);
  }, [activeIndex, totalSlides]);

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-primary text-white py-20"
      >
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold mb-4 text-center text-white mt-6">My Finished Projects</h1>
            <p className="text-secondary text-lg">Here are some of the projects I&#39;ve worked on</p>
          </motion.div>

          <Swiper
            modules={[Mousewheel, Keyboard]}
            direction="vertical"
            slidesPerView={1}
            speed={650}
            mousewheel={{ forceToAxis: true, sensitivity: 0.6, releaseOnEdges: true }}
            keyboard={{ enabled: true }}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            style={{ height: 'calc(100vh - 6rem)' }}
          >
            {pages.map((pageProjects, idx) => (
              <SwiperSlide key={`proj-page-${idx}`}>
                <div className="min-h-screen flex items-start justify-center">
                  <motion.section className="w-full pt-12" style={{ maxHeight: 'calc(100vh - 7rem)', overflow: 'auto' }}>
                    <ProjectCard projects={pageProjects} />
                  </motion.section>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide>
              <div className="min-h-screen flex items-center justify-center">
                <section className="w-full px-4 md:px-8">
                  <ContactCTA />
                </section>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;