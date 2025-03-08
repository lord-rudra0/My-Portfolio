const HeroSection = () => {
  const handleKnowMeBetterClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="hero-section">
      <RouterLink 
        to="/about"
        onClick={handleKnowMeBetterClick}
        className="know-me-button"
      >
        Know Me Better
      </RouterLink>
    </div>
  );
}; 