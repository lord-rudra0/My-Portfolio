import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { content } from '../data/content';
import ScrollReveal from './ui/ScrollReveal';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';
// import ScrollFloat from "./ui/ScrollFloat"
import BlurText from "./ui/ScrollFloat"

const AboutPreview = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/about');
  };

  return (
    <section className="pb-20 bg-primary">
      <div className="max-w-screen-lg mx-auto px-4">
        <ScrollReveal duration={1.0} delay={0.2}>
          <motion.div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            

              <BlurText
                text={content.about.fullBio}
                delay={50}
                animateBy="words"
                direction="top"
                // onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
/> 

            
            <InteractiveHoverButton className="know-more-btn inline-flex items-center transition-all duration-300 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm" onClick={handleLearnMoreClick}>
              Learn More
            </InteractiveHoverButton>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutPreview;