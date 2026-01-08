import React from 'react';

const Rivalry = () => {
  return (
    <section id="rivalry" className="section rivalry-section about-subsection">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Historic Rivalry</h2>
          <div className="title-underline"></div>
        </div>
        <div className="rivalry-content">
          <div className="rivalry-card">
            <div className="rivalry-icon">⚔️</div>
            <h3>St George's College, Harare</h3>
            <p className="rivalry-subtitle">One of the longest-standing school rugby matchups in Zimbabwe</p>
            
            <div className="rivalry-description">
              <p>
                The rivalry between Prince Edward School and St George's College is one of the 
                most storied and passionate in Zimbabwean school rugby. This historic matchup 
                has been a cornerstone of the schools rugby calendar for generations, drawing 
                large crowds and creating unforgettable moments.
              </p>
              <p>
                Each encounter between the Tigers and St George's is more than just a rugby 
                match—it is a clash of traditions, pride, and excellence. The intensity on the 
                field is matched only by the respect between the two institutions off it.
              </p>
              <p>
                This rivalry has produced some of the most memorable matches in Zimbabwean 
                schools rugby history, with both teams pushing each other to new heights. 
                The annual fixture is eagerly anticipated by players, alumni, and supporters alike.
              </p>
            </div>

            <div className="rivalry-highlights">
              <h4>Rivalry Highlights</h4>
              <ul className="highlights-list">
                <li>One of the longest-standing school rugby matchups in Zimbabwe</li>
                <li>Annual fixture eagerly anticipated by both schools</li>
                <li>Historic encounters that have shaped schoolboy rugby</li>
                <li>Mutual respect and sportsmanship between institutions</li>
                <li>Produces some of the most competitive and memorable matches</li>
              </ul>
            </div>

            <div className="rivalry-values">
              <h4>Values of the Rivalry</h4>
              <div className="values-grid">
                <div className="value-card">
                  <h5>Tradition</h5>
                  <p>Decades of competitive history</p>
                </div>
                <div className="value-card">
                  <h5>Respect</h5>
                  <p>Mutual admiration and sportsmanship</p>
                </div>
                <div className="value-card">
                  <h5>Excellence</h5>
                  <p>Pushing each other to be better</p>
                </div>
                <div className="value-card">
                  <h5>Pride</h5>
                  <p>Representing our schools with honor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rivalry;

