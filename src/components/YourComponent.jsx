const YourComponent = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (path) => {
    scrollToTop(); // Scroll to top before navigating
    // Use your navigation method here, e.g., using react-router
    history.push(path); // Example using react-router's history
  };

  return (
    <div>
      <button onClick={() => handleNavigation('/know-me')}>Know Me Better</button>
      <button onClick={() => handleNavigation('/get-in-touch')}>Get in Touch</button>
      <button onClick={() => handleNavigation('/learn-more')}>Learn More</button>
    </div>
  );
}; 