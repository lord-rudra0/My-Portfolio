import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="py-6"
    >
      <VerticalTimeline animate={true} lineColor={colors.border}>
        {/* BSc Mathematics and Physics */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={timelineElementStyle}
          contentArrowStyle={{ borderRight: `7px solid ${colors.border}` }}
          date="2020-2023"
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
              Bachelor of Science in Mathematics and Physics
            </h3>
            <h4 className="vertical-timeline-element-subtitle mt-2" style={{ color: colors.subtitle }}>
              Awadh University, Ayodhya
            </h4>
            <p className="mt-2" style={{ color: colors.description }}>
              Specialized in Mathematics and Physics with optional of Cryptography and Number Theory.
            </p>

            <motion.div
              className={`absolute inset-0 bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/10' : 'via-black/5'
                } to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}
              style={{ skewX: -20 }}
            />
          </motion.div>
        </VerticalTimelineElement>

        {/* BTech Computer Science */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={timelineElementStyle}
          contentArrowStyle={{ borderRight: `7px solid ${colors.border}` }}
          date="2022-2026"
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
              Bachelor of Technology in Computer Science and Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle mt-2" style={{ color: colors.subtitle }}>
              Amal Jyothi College of Engineering and Technology
            </h4>
            <p className="mt-2" style={{ color: colors.description }}>
              Currently pursuing Computer Science with focus on software development, data structures, algorithms, and modern web technologies.
            </p>

            <motion.div
              className={`absolute inset-0 bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/10' : 'via-black/5'
                } to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}
              style={{ skewX: -20 }}
            />
          </motion.div>
        </VerticalTimelineElement>

        {/* Full Stack Web Development */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={timelineElementStyle}
          contentArrowStyle={{ borderRight: `7px solid ${colors.border}` }}
          date="2024"
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
              Full Stack Web Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle mt-2" style={{ color: colors.subtitle }}>
              Udemy
            </h4>
            <p className="mt-2" style={{ color: colors.description }}>
              Intensive Web Development program covering full-stack web development.
            </p>

            <motion.div
              className={`absolute inset-0 bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/10' : 'via-black/5'
                } to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}
              style={{ skewX: -20 }}
            />
          </motion.div>
        </VerticalTimelineElement>
        {/* Android App Development */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={timelineElementStyle}
          contentArrowStyle={{ borderRight: `7px solid ${colors.border}` }}
          date="2025"
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
              Android App Development using Kotlin
            </h3>
            <h4 className="vertical-timeline-element-subtitle mt-2" style={{ color: colors.subtitle }}>
              Udemy
            </h4>
            <p className="mt-2" style={{ color: colors.description }}>
              Comprehensive course on Android app development using Kotlin, focusing on building modern, user-friendly mobile applications.
            </p>
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r from-transparent ${theme === 'dark' ? 'via-white/10' : 'via-black/5'
                } to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}
              style={{ skewX: -20 }}
            />
          </motion.div>
        </VerticalTimelineElement>
      </VerticalTimeline>

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
        `}
      </style>
    </motion.div>
  );
};

export default Education;