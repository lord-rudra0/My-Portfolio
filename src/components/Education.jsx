import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext'; // Import your theme context

const Education = () => {
  const { theme } = useTheme(); // Get current theme
  
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="py-10"
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
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-full flex items-center justify-center"
            >
              <FaGraduationCap className="text-2xl" />
            </motion.div>
          }
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
              className={`absolute inset-0 bg-gradient-to-r from-transparent ${
                theme === 'dark' ? 'via-white/10' : 'via-black/5'
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
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-full flex items-center justify-center"
            >
              <FaGraduationCap className="text-2xl" />
            </motion.div>
          }
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
              className={`absolute inset-0 bg-gradient-to-r from-transparent ${
                theme === 'dark' ? 'via-white/10' : 'via-black/5'
              } to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}
              style={{ skewX: -20 }}
            />
          </motion.div>
  </VerticalTimelineElement>

        {/* Full Stack Web Development - Make this the last education entry */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={timelineElementStyle}
          contentArrowStyle={{ borderRight: `7px solid ${colors.border}` }}
          date="2024"
          iconStyle={{ background: colors.icon, color: '#fff' }}
          icon={
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-full flex items-center justify-center"
            >
              <FaGraduationCap className="text-2xl" />
            </motion.div>
          }
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
              className={`absolute inset-0 bg-gradient-to-r from-transparent ${
                theme === 'dark' ? 'via-white/10' : 'via-black/5'
              } to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}
              style={{ skewX: -20 }}
            />
          </motion.div>
        </VerticalTimelineElement>

        {/* Final dot - make this the very last element with isLast prop */}
        {/* <VerticalTimelineElement
          iconStyle={{ background: 'rgb(22, 163, 74)', color: '#fff' }}
          icon={
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-full flex items-center justify-center"
            >
              <FaGraduationCap className="text-2xl" />
            </motion.div>
          }
          isLast={true}
        /> */}
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
        `}
      </style>
    </motion.div>
  );
};

export default Education;