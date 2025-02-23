import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import ScrollReveal from './ui/ScrollReveal';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-screen-lg mx-auto px-4">
        <ScrollReveal duration={0.5} delay={0.2}>
          <motion.div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="hero-accent text-4xl font-bold text-white mb-4">About</span> <snap className="text-white">Me</snap>
            </h2>
            <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
              {content.about.fullBio}
            </p>
            <Link
              to="/about"
              className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutPreview;