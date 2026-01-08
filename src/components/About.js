import React, { useState, useEffect } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('#about');
      const identitySection = document.querySelector('#identity');
      const groundsSection = document.querySelector('#home-grounds');
      const rivalrySection = document.querySelector('#rivalry');
      
      const scrollPosition = window.scrollY + 200;
      
      if (rivalrySection && scrollPosition >= rivalrySection.offsetTop) {
        setActiveTab('rivalry');
      } else if (groundsSection && scrollPosition >= groundsSection.offsetTop) {
        setActiveTab('grounds');
      } else if (identitySection && scrollPosition >= identitySection.offsetTop) {
        setActiveTab('identity');
      } else if (aboutSection && scrollPosition >= aboutSection.offsetTop) {
        setActiveTab('overview');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabId, sectionId) => {
    setActiveTab(tabId);
    // Small delay to ensure tab state updates before scroll
    setTimeout(() => {
      const target = document.querySelector(sectionId);
      if (target) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <>
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Prince Edward School</h2>
            <div className="title-underline"></div>
          </div>
          
          {/* Sub-navigation tabs */}
          <div className="about-tabs">
            <button 
              className={`about-tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`about-tab ${activeTab === 'identity' ? 'active' : ''}`}
              onClick={() => handleTabClick('identity', '#identity')}
            >
              Identity
            </button>
            <button 
              className={`about-tab ${activeTab === 'grounds' ? 'active' : ''}`}
              onClick={() => handleTabClick('grounds', '#home-grounds')}
            >
              Home Grounds
            </button>
            <button 
              className={`about-tab ${activeTab === 'rivalry' ? 'active' : ''}`}
              onClick={() => handleTabClick('rivalry', '#rivalry')}
            >
              Rivalry
            </button>
          </div>

          {/* Overview Content */}
          {activeTab === 'overview' && (
            <div className="about-content">
              <div className="about-text">
                <p className="lead">
                  Prince Edward School (often referred to as PE or PES) is a historic boys' boarding and day secondary school in Harare, Zimbabwe, established on <strong>13 June 1898</strong>.
                </p>
                <p>
                  As one of the country's oldest and most prestigious schools, Prince Edward has a rich tradition of academic excellence and sporting achievement.
                </p>
                <p>
                  From its early days, rugby has been at the heart of school life, shaping character, camaraderie, resilience, and leadership among pupils.
                </p>
              </div>
              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-number">1898</div>
                  <div className="stat-label">Founded</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">125+</div>
                  <div className="stat-label">Years of Rugby</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">The Tigers</div>
                  <div className="stat-label">Team Name</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default About;

