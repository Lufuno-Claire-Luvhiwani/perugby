import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(targetId);
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
    <nav className="navbar" style={{
      background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.15)' : '0 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="nav-container">
        <div className="nav-logo">
          <img 
            src="/logo.png" 
            alt="Prince Edward School Crest" 
            className="school-crest"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="logo-text-container" style={{ display: 'none' }}>
            <span className="logo-text">PE Rugby</span>
            <span className="logo-subtitle">The Tigers</span>
          </div>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#history" onClick={(e) => handleNavClick(e, '#history')}>History</a></li>
          <li><a href="#alumni" onClick={(e) => handleNavClick(e, '#alumni')}>Alumni</a></li>
          <li><a href="#technical-team" onClick={(e) => handleNavClick(e, '#technical-team')}>Technical Team</a></li>
          <li><a href="#teams" onClick={(e) => handleNavClick(e, '#teams')}>Teams</a></li>
          <li><a href="#calendar" onClick={(e) => handleNavClick(e, '#calendar')}>Calendar</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
          <li><a href="#legacy" onClick={(e) => handleNavClick(e, '#legacy')}>Legacy</a></li>
        </ul>
        <button 
          className="nav-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

