import { motion } from 'framer-motion';
import { content } from '../data/content';

const TimelineItem = ({ item, index, side = 'left' }) => {
  return (
    <motion.div 
      className={`flex ${side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center gap-4 mb-8`}
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div 
        className="w-full md:w-1/2 p-6 bg-tertiary rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
        <p className="text-secondary mb-2">{item.school}</p>
        <p className="text-blue-400">{item.year}</p>
        {item.description && (
          <p className="text-secondary mt-2">{item.description}</p>
        )}
      </motion.div>

      <div className="relative flex items-center justify-center">
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="absolute w-1 h-full bg-blue-500 opacity-20"></div>
      </div>

      <div className="w-full md:w-1/2"></div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-secondary">My academic journey and achievements</p>
        </motion.div>

        <div className="relative">
          {content.education.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              index={index} 
              side={index % 2 === 0 ? 'left' : 'right'} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;