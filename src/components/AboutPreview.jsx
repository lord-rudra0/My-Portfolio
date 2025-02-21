import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { content } from '../data/content';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
            {content.about.shortBio}
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;