import React from 'react';

const Alumni = () => {
  const alumni = [
    {
      initials: 'TC',
      name: 'Tonderai Chavhanga',
      role: 'Winger',
      bio: 'A winger who progressed through PE rugby to a professional career, representing South African sides and national age-group teams.'
    },
    {
      initials: 'IR',
      name: 'Ian Robertson',
      role: 'Centre/Flyhalf',
      bio: 'A former centre/flyhalf who played at a high level post-school and represented Rhodesia in national competitions and World XV.'
    }
  ];

  return (
    <section id="alumni" className="section alumni-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Notable Rugby Alumni</h2>
          <div className="title-underline"></div>
        </div>
        <div className="alumni-grid">
          {alumni.map((alumnus, index) => (
            <div key={index} className="alumni-card">
              <div className="alumni-avatar">{alumnus.initials}</div>
              <h3>{alumnus.name}</h3>
              <p className="alumni-role">{alumnus.role}</p>
              <p className="alumni-bio">{alumnus.bio}</p>
            </div>
          ))}
        </div>
        <div className="alumni-note">
          <p>
            Additionally, former PES rugby leaders and alumni have gone on to coach and develop rugby in Zimbabwe and overseas, contributing back to the sport's growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Alumni;

