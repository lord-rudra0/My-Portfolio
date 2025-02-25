import { useEffect, useState } from 'react';

export default function YourComponent() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`your-element ${scrolled ? 'scrolled' : ''}`}>
      {/* Your content here */}
    </div>
  );
} 