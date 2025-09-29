import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';
import { content } from '../data/content';
import Education from '../components/Education';
import Skill from '../components/Skill';
import { useTheme } from '../context/ThemeContext';
import BlurText from '../components/ui/ScrollFloat';
import { VelocityScroll } from '../components/magicui/scroll-based-velocity';
import ContactCTA from '../components/ContactCTA';
import SkillsRow from '../components/SkillsRow';
// import { IconCloud } from '../components/magicui/icon-cloud';
// import { IconCloud } from '../components/magicui/icon-cloud';
// import Test from '../components/Education';
// import { TextReveal } from '../components/ui/text-reveal';

// Small search control reused from Home page
// eslint-disable-next-line react/prop-types
function SearchSkills({ value, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center">
      <button aria-label="Search skills" onClick={() => setOpen((o) => !o)} className="p-1 rounded-full hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
      </button>
      {open && (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="ml-2 px-2 py-1 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          placeholder="Search skills..."
        />
      )}
    </div>
  );
}

// (sectionVariants removed - not used in About page because Swiper handles per-slide animation)

// Portal/tunnel animation removed per request

const About = () => {
  const { theme } = useTheme();
  const isLargeScreen = window.matchMedia('(min-width: 768px)').matches; // Check for screen size
  const [activeIndex, setActiveIndex] = useState(0);
  const [skillQuery, setSkillQuery] = useState('');
  const educationRef = useRef(null);
  const outerSwiperRef = useRef(null);
  const totalSlides = 4; // Intro, Education, Skills, Contact

  useEffect(() => {
    if (activeIndex === 1 && educationRef.current) {
      // Ensure the education container is scrolled to top when activated
      educationRef.current.scrollTop = 0;
    }

    // dispatch custom event so global scroll progress can react
    const ev = new CustomEvent('aboutSlideChange', { detail: { activeIndex, totalSlides } });
    window.dispatchEvent(ev);
  }, [activeIndex]);

  // Listen for inner swiper events to temporarily lock/unlock the outer Swiper
  useEffect(() => {
    const onInnerStart = () => {
      const sw = outerSwiperRef.current;
      if (sw) {
        try {
          sw.allowTouchMove = false;
          if (sw.mousewheel) sw.mousewheel.disable();
        } catch {
          // ignore
        }
      }
    };

    const onInnerEnd = () => {
      const sw = outerSwiperRef.current;
      if (sw) {
        try {
          sw.allowTouchMove = true;
          if (sw.mousewheel) sw.mousewheel.enable();
        } catch {
          // ignore
        }
      }
    };

    window.addEventListener('innerSwiperStart', onInnerStart);
    window.addEventListener('innerSwiperEnd', onInnerEnd);
    return () => {
      window.removeEventListener('innerSwiperStart', onInnerStart);
      window.removeEventListener('innerSwiperEnd', onInnerEnd);
    };
  }, []);

  // initialize indicator on mount
  useEffect(() => {
    const ev = new CustomEvent('aboutSlideChange', { detail: { activeIndex: 0, totalSlides } });
    window.dispatchEvent(ev);
  }, []);

  // Hide native scrollbar visuals for the About full-page experience while mounted
  useEffect(() => {
    document.body.classList.add('hide-scrollbar');
    return () => {
      document.body.classList.remove('hide-scrollbar');
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-black'}`}
    >
      <Swiper
        modules={[Mousewheel, Keyboard]}
        direction="vertical"
        slidesPerView={1}
        speed={700}
        mousewheel={{ forceToAxis: true, sensitivity: 0.65, releaseOnEdges: true }}
        keyboard={{ enabled: true }}
        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
        onSwiper={(sw) => { outerSwiperRef.current = sw; }}
        style={{ height: '100vh' }}
      >
        {/* track active slide so we can reset inner scroll on Education */}
        <SwiperSlide>
          <div className="min-h-screen flex items-center justify-center">
            <section className="w-full max-w-screen-2xl mx-auto px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16 pt-16"
              >
                <h1 className="text-4xl font-bold mb-8 text-center text-white">About Me</h1>
                <BlurText
                  text={content.about.fullBio}
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className={`text-2xl mb-8 text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}
                  duration={1.0}
                />
              </motion.div>
            </section>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* Education slide: top-aligned and scrollable so title sits under the navbar */}
          <div role="region" aria-label="Education section" className="min-h-screen flex items-start justify-center">
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 pt-32 pb-8 hide-scrollbar"
              style={{ height: 'calc(100vh - 4rem)', overflow: 'auto', overscrollBehavior: 'contain' }}
              ref={educationRef}
            >
                <h1 className="text-4xl font-bold mb-6 text-center" style={{ scrollMarginTop: '6rem' }}>Education</h1>
              <Education />
              {/* bottom spacer to ensure final timeline card isn't clipped on shorter viewports */}
              <div style={{ height: 220 }} aria-hidden="true" />
            </motion.section>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div role="region" aria-label="Skills section" className="min-h-screen flex items-start justify-center">
            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="w-full max-w-screen-2xl mx-auto px-4 md:px-8 pt-24 pb-8 hide-scrollbar"
              style={{ height: 'calc(100vh - 4rem)', overflow: 'auto' }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl font-bold mb-0 text-center text-white" style={{ scrollMarginTop: '6rem' }}>Skills</h1>
                <div className="hidden md:block">
                  <SearchSkills value={skillQuery} onChange={setSkillQuery} />
                </div>
              </div>

              <div className="block md:hidden mb-4">
                <SearchSkills value={skillQuery} onChange={setSkillQuery} />
                <div className="mt-3">
                  <SkillsRow filterText={skillQuery} />
                </div>
              </div>

              <div className="relative flex w-full flex-col items-center justify-start mb-12 px-4 md:px-8">
                {isLargeScreen && (
                  <div className="relative z-10 transform-gpu">
                    <VelocityScroll
                      numRows={1}
                      defaultVelocity={-0.5}
                      className="[mask-image:linear-gradient(to_right,transparent_0%,white_20%,white_80%,transparent_100%)]"
                    >
                      <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} text-4xl px-0 sm:px-0 lg:px-0`}>
                        Velocity ✧ Scroll ✧ C ✧ CSharp ✧ Java ✧ CSS3 ✧ JavaScript ✧ HTML5 ✧ Python ✧ AssemblyScript ✧ TypeScript ✧
                        Vercel ✧ Render ✧ Netlify ✧ Heroku ✧ Firebase ✧ Bootstrap ✧ EJS ✧ ExpressJS ✧ FastAPI ✧ Flask ✧ Jinja ✧
                        NodeDotJS ✧ NPM ✧ React ✧ Vite ✧ TailwindCSS ✧ MongoDB ✧ MySQL ✧ SQLite ✧ Figma ✧ Canva ✧ NumPy ✧ Pandas ✧
                        TensorFlow ✧ Git ✧ GitHub ✧ Unity ✧ Postman ✧ Docker
                      </span>
                    </VelocityScroll>
                  </div>
                )}

                <div className="">
                  <Skill />
                </div>
                {/* Desktop: SkillsRow removed per user request */}
              </div>

              {/* bottom spacer so inner scroll can reach all content */}
              <div style={{ height: 160 }} aria-hidden="true" />
            </motion.section>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="min-h-screen flex items-center justify-center">
            <section className="w-full max-w-screen-2xl mx-auto px-4 md:px-8">
              <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <ContactCTA />
              </motion.section>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default About;