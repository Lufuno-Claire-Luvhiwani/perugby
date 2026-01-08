import React from 'react';

const HomeGrounds = () => {
  return (
    <section id="home-grounds" className="section home-grounds-section about-subsection">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Home Grounds</h2>
          <div className="title-underline"></div>
        </div>
        <div className="grounds-content">
          <div className="grounds-card">
            <div className="grounds-icon">🏟️</div>
            <h3>Jubilee Field</h3>
            <p className="grounds-location">Prince Edward School, Harare, Zimbabwe</p>
            <div className="grounds-description">
              <p>
                Jubilee Field is the historic home ground of the Prince Edward School Tigers. 
                This hallowed turf has witnessed over a century of rugby excellence, where 
                generations of Tigers have played with pride, passion, and purpose.
              </p>
              <p>
                The field stands as a symbol of tradition and excellence, hosting countless 
                memorable matches, fierce rivalries, and moments of triumph. It is here that 
                the Tigers have built their legacy, one match at a time.
              </p>
              <p>
                For players, stepping onto Jubilee Field means representing not just a team, 
                but a tradition that spans more than 125 years. It is where character is forged, 
                bonds are strengthened, and the spirit of the Tigers comes alive.
              </p>
            </div>
            <div className="grounds-features">
              <h4>Field Features</h4>
              <ul className="features-list">
                <li>Historic rugby field with over 125 years of tradition</li>
                <li>Home to the Prince Edward School Tigers</li>
                <li>Host to numerous inter-school fixtures</li>
                <li>Witness to the Cottco Rugby Festival</li>
                <li>Training ground for future rugby stars</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGrounds;

