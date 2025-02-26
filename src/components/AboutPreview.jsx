import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import ScrollReveal from './ui/ScrollReveal';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-screen-lg mx-auto px-4">
        <ScrollReveal duration={1.0} delay={0.2}>
          <motion.div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
              {content.about.shortBio}
            </p>

            
            <InteractiveHoverButton className="know-more-btn inline-flex items-center transition-all duration-300 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
             <Link
              to="/about">
              Learn More
            </Link>
            </InteractiveHoverButton>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutPreview;