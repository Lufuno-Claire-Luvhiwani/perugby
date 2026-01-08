import React from 'react';

const Hero = () => {
  const handleScrollClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#about');
    if (target) {
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Prince Edward School Rugby</h1>
        <p className="hero-subtitle">The Tigers</p>
        <p className="hero-description">
          More than a sport — a tradition of excellence, character, and pride since 1898
        </p>
        <a href="#about" className="hero-cta" onClick={handleScrollClick}>
          Discover Our Legacy
        </a>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </header>
  );
};

export default Hero;

