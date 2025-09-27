// no motion import needed here
import { useNavigate } from 'react-router-dom';
import { content } from '../data/content';
// ScrollReveal removed for Swiper slides (slide layout prevents normal scroll events)
import { InteractiveHoverButton } from './magicui/interactive-hover-button';
import BlurText from './ui/ScrollFloat';

const AboutPreview = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/about');
  };

  return (
    <section className="min-h-screen flex items-center py-16 bg-primary">
      <div className="max-w-screen-2xl mx-auto px-4 w-full">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

          {/* Always-visible fallback so About can't be blank inside Swiper slides */}
            <p className="text-xl mb-6 text-gray-200 max-w-2xl mx-auto block md:hidden">{content.about.shortBio}</p>

          {/* Decorative animated text (progressive enhancement). Hidden on small screens. */}
          <div className="mx-auto">
            <BlurText
              text={content.about.fullBio}
              delay={50}
              animateBy="words"
              direction="top"
              className="text-2xl mb-8 hidden md:block"
            />
          </div>

          <InteractiveHoverButton className="know-more-btn inline-flex items-center transition-all duration-300 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm" onClick={handleLearnMoreClick}>
            Learn More
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;