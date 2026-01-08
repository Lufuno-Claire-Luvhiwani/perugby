import React from 'react';

const Identity = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
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
    <section id="identity" className="section identity-section about-subsection">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Rugby Identity & Culture</h2>
          <div className="title-underline"></div>
        </div>
        <div className="identity-grid">
          <div className="identity-card">
            <div className="card-icon">🏉</div>
            <h3>Team Name</h3>
            <p><strong>The Tigers</strong></p>
          </div>
          <div 
            className="identity-card clickable-card"
            onClick={(e) => handleNavClick(e, '#home-grounds')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-icon">🏟️</div>
            <h3>Home Grounds</h3>
            <p><strong>Jubilee Field</strong></p>
            <p className="card-note">Click to learn more</p>
          </div>
          <div className="identity-card">
            <div className="card-icon">🎨</div>
            <h3>Colours</h3>
            <p><strong>Maroon, Green & White</strong></p>
            <div className="color-swatches">
              <span className="swatch maroon"></span>
              <span className="swatch green"></span>
              <span className="swatch white"></span>
            </div>
          </div>
          <div 
            className="identity-card clickable-card"
            onClick={(e) => handleNavClick(e, '#rivalry')}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-icon">⚔️</div>
            <h3>Historic Rivalry</h3>
            <p><strong>St George's College, Harare</strong></p>
            <p className="card-note">One of the longest-standing school rugby matchups in Zimbabwe. Click to learn more.</p>
          </div>
        </div>
        <div className="identity-philosophy">
          <p className="philosophy-text">
            Rugby at Prince Edward School is more than a sport — it is a pivotal part of student life, tradition, and school pride. Participation helps develop teamwork, discipline, fitness, leadership, and respect on and off the field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Identity;

