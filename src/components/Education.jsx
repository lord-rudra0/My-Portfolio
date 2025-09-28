import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaGraduationCap } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
// ...existing code...

const Education = () => {
  const { theme } = useTheme();
  // Use a simple mount animation instead of scroll-driven transforms so
  // the component remains visible when rendered inside full-page Swiper slides.

  // Define colors based on theme
  const colors = {
    background: theme === 'dark'
      ? 'rgba(34, 197, 94, 0.1)'
      : 'rgba(255, 255, 255, 0.9)',
    text: theme === 'dark'
      ? '#fff'
      : '#1a1a1a',
    subtitle: theme === 'dark'
      ? '#4ade80'
      : '#16a34a',
    description: theme === 'dark'
      ? 'rgba(255, 255, 255, 0.7)'
      : 'rgba(0, 0, 0, 0.7)',
    border: theme === 'dark'
      ? 'rgba(34, 197, 94, 0.2)'
      : 'rgba(34, 197, 94, 0.3)',
    icon: theme === 'dark'
      ? 'rgb(34, 197, 94)'
      : '#16a34a'
  };

  const timelineElementStyle = {
    background: theme === 'dark' ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.5)',
    color: colors.text,
    border: `1px solid ${colors.border}`,
    boxShadow: theme === 'dark'
      ? 'none'
      : '0 3px 10px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)'
  };

  // Animation variants for timeline elements
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Collect timeline entries in an array so we can reuse for mobile grouping
  const entries = [
    {
      date: '2020-2023',
      title: 'Bachelor of Science in Mathematics and Physics',
      subtitle: 'Awadh University, Ayodhya',
      description: 'Specialized in Mathematics and Physics with optional of Cryptography and Number Theory.'
    },
    {
      date: '2022-2026',
      title: 'Bachelor of Technology in Computer Science and Engineering',
      subtitle: 'Amal Jyothi College of Engineering and Technology',
      description: 'Currently pursuing Computer Science with focus on software development, data structures, algorithms, and modern web technologies.'
    },
    {
      date: '2024',
      title: 'Full Stack Web Development',
      subtitle: 'Udemy',
      description: 'Intensive Web Development program covering full-stack web development.'
    },
    {
      date: '2025',
      title: 'Android App Development using Kotlin',
      subtitle: 'Udemy',
      description: 'Comprehensive course on Android app development using Kotlin, focusing on building modern, user-friendly mobile applications.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="py-6"
    >
      {/* Desktop: original VerticalTimeline unchanged */}
      <div className="hidden md:block">
        <VerticalTimeline animate={true} lineColor={colors.border}>
          {entries.map((e, idx) => (
            <VerticalTimelineElement
              key={idx}
              className="vertical-timeline-element--education"
              contentStyle={timelineElementStyle}
              contentArrowStyle={{ borderRight: `7px solid ${colors.border}` }}
              date={e.date}
              iconStyle={{ background: colors.icon, color: '#fff' }}
              icon={
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <FaGraduationCap className="text-2xl" />
                </motion.div>
              }
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden group"
              >
                <h3 className="vertical-timeline-element-title text-xl font-bold" style={{ color: colors.text }}>
                  {e.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle mt-2" style={{ color: colors.subtitle }}>
                  {e.subtitle}
                </h4>
                <p className="mt-2" style={{ color: colors.description }}>
                  {e.description}
                </p>

                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/10' : 'via-black/5'} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}
                  style={{ skewX: -20 }}
                />
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* Mobile: use Swiper with 2 cards per slide. Dispatch custom events to lock outer Swiper while interacting */}
      <div className="block md:hidden px-2">
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          style={{ height: '100%' }}
          onTouchStart={() => window.dispatchEvent(new CustomEvent('innerSwiperStart'))}
          onTouchEnd={() => window.dispatchEvent(new CustomEvent('innerSwiperEnd'))}
          onPointerDown={() => window.dispatchEvent(new CustomEvent('innerSwiperStart'))}
          onPointerUp={() => window.dispatchEvent(new CustomEvent('innerSwiperEnd'))}
        >
          {Array.from({ length: Math.ceil(entries.length / 2) }).map((_, slideIdx) => {
            const first = entries[slideIdx * 2];
            const second = entries[slideIdx * 2 + 1];
            return (
              <SwiperSlide key={slideIdx} style={{ height: '100%' }}>
                <div style={{ height: '100%', overflow: 'auto' }}>
                  <VerticalTimeline animate={false} layout="vertical" style={{ height: '100%' }}>
                    {[first, second].filter(Boolean).map((e, idx) => (
                      <VerticalTimelineElement
                        key={idx}
                        className="vertical-timeline-element--education"
                        contentStyle={timelineElementStyle}
                        contentArrowStyle={{ borderRight: `7px solid ${colors.border}` }}
                        date={e.date}
                        iconStyle={{ background: colors.icon, color: '#fff' }}
                        icon={<div className="w-full h-full flex items-center justify-center"><FaGraduationCap className="text-2xl" /></div>}
                      >
                        <div className="relative overflow-hidden">
                          <h3 className="vertical-timeline-element-title text-base font-semibold" style={{ color: colors.text }}>
                            {e.title}
                          </h3>
                          <h4 className="vertical-timeline-element-subtitle mt-1 text-sm" style={{ color: colors.subtitle }}>
                            {e.subtitle}
                          </h4>
                          <p className="mt-1 text-sm" style={{ color: colors.description }}>
                            {e.description}
                          </p>
                        </div>
                      </VerticalTimelineElement>
                    ))}
                  </VerticalTimeline>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <style>
        {`
          .vertical-timeline::before {
            background: ${colors.border};
          }
          .vertical-timeline-element:last-child::before {
            display: none;
          }
          .vertical-timeline-element:last-child .vertical-timeline-element-icon {
            margin-bottom: 0;
          }
          .vertical-timeline-element {
            margin: 0.6em 0; /* tighter spacing so more cards fit in the viewport */
          }
          .vertical-timeline-element-content {
            padding: 0.75rem 1rem !important; /* reduce content padding */
            border-radius: 6px;
          }
          .vertical-timeline-element-title {
            font-size: 1rem; /* slightly smaller title */
            line-height: 1.15;
            margin-bottom: 0.25rem;
          }
          .vertical-timeline-element-subtitle {
            font-size: 0.875rem;
            margin-top: 0.25rem;
          }
          .vertical-timeline.vertical-timeline--animate .vertical-timeline-element-content.is-hidden {
            visibility: visible !important;
          }
          /* Mobile: ensure timeline elements don't overlap skills area */
          @media (max-width: 767px) {
            /* make timeline very compact so more cards fit on small screens */
            .vertical-timeline-element { margin: 0.3rem 0; }
            .vertical-timeline-element .vertical-timeline-element-content { padding: 0.5rem 0.6rem !important; }
            .vertical-timeline-element .vertical-timeline-element-icon { width: 0.9rem !important; height: 0.9rem !important; }
            .vertical-timeline-element .vertical-timeline-element-icon svg { width: 0.9rem; height: 0.9rem; }
            .vertical-timeline { padding-left: 0 !important; }
            .vertical-timeline-element-title { font-size: 0.9rem; }
            .vertical-timeline-element-subtitle { font-size: 0.8rem; }
            .vertical-timeline-element-content p { font-size: 0.78rem; margin-top: 0.25rem; }
            /* reduce vertical spacers so entire timeline fits */
            .vertical-timeline { margin-bottom: 0.5rem; }
            .vertical-timeline-element:last-child .vertical-timeline-element-content { margin-bottom: 0.25rem; }
            /* Mobile: style Swiper navigation and pagination to be small and highlighted */
            .swiper-button-next, .swiper-button-prev {
              width: 36px;
              height: 36px;
              background: ${colors.icon};
              color: #fff;
              border-radius: 9999px;
              box-shadow: 0 8px 18px rgba(0,0,0,0.22);
              top: 50%;
              transform: translateY(-50%);
              z-index: 40;
              opacity: 0.98;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .swiper-button-next::after, .swiper-button-prev::after {
              font-size: 14px;
            }

            .swiper-button-prev { left: 8px; }
            .swiper-button-next { right: 8px; }

            .swiper-button-disabled { opacity: 0.45; pointer-events: none; }

            .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background: ${colors.icon};
              opacity: 0.95;
            }

            .swiper-pagination-bullet-active {
              transform: scale(1.15);
              box-shadow: 0 6px 12px rgba(0,0,0,0.18);
            }
          }
        `}
      </style>
    </motion.div>
  );
};

export default Education;