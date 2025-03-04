import { useRef, useEffect, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';
import PropTypes from 'prop-types';

const BlurText = ({
  text = '',
  delay = 50,
  className = '',
  animateBy = 'words', // 'words' or 'letters'
  direction = 'top', // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = '-20px',
  animationFrom,
  animationTo,
  easing = 'easeOutQuad',
  onAnimationComplete,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const animatedCount = useRef(0);

  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(5px)', opacity: 0, transform: 'translate3d(0,-30px,0)' }
      : { filter: 'blur(5px)', opacity: 0, transform: 'translate3d(0,30px,0)' };

  const defaultTo = [
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
          for (const step of (animationTo || defaultTo)) {
            await next({
              ...step,
              config: { 
                tension: 400,
                friction: 26,
                easing 
              }
            });
          }
          animatedCount.current += 1;
          if (animatedCount.current === elements.length && onAnimationComplete) {
            onAnimationComplete();
          }
        }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { 
        tension: 400,
        friction: 26,
        easing 
      },
    }))
  );

  return (
    <p ref={ref} className={`blur-text ${className}`}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: 'inline-block',
            willChange: 'transform, filter, opacity',
          }}
        >
          {elements[index] === ' ' ? '\u00A0' : elements[index]}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </animated.span>
      ))}
    </p>
  );
};

BlurText.propTypes = {
  text: PropTypes.string,
  delay: PropTypes.number,
  className: PropTypes.string,
  animateBy: PropTypes.oneOf(['words', 'letters']),
  direction: PropTypes.oneOf(['top', 'bottom']),
  threshold: PropTypes.number,
  rootMargin: PropTypes.string,
  animationFrom: PropTypes.object,
  animationTo: PropTypes.arrayOf(PropTypes.object),
  easing: PropTypes.string,
  onAnimationComplete: PropTypes.func
};

export default BlurText;
