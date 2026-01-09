import React, { useState } from 'react';
import PhilosophyModal from './PhilosophyModal';

const TechnicalTeam = () => {
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const teamMembers = [
    {
      name: 'Shaun Desouza',
      role: 'Head Coach',
      initials: 'SD',
      hasPhilosophy: true
    },
    {
      name: 'Hugh Vera',
      role: 'Coach',
      initials: 'HV'
    },
    {
      name: 'Abraham `Bobo` Rwodzi',
      role: 'Cubs Coach',
      initials: 'AR',
      hasPhilosophy: true
    },
    {
      name: 'Tinotenda Madawu',
      role: 'U15 Coach',
      initials: 'TM'
    },
    {
      name: 'Gilbert Chibaga',
      role: 'U15 Coach',
      initials: 'GC'
    },
    {
      name: 'Shelton Chiuswa',
      role: 'U14 Coach',
      initials: 'SC',
      hasPhilosophy: true
    },
    {
      name: 'Contana Date',
      role: 'U14 Coach',
      initials: 'CD'
    },
    {
      name: 'John Muringani',
      role: 'Team Manager',
      initials: 'JM',
      isManager: true
    }
  ];

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const headCoachPhilosophy = {
    name: 'Shaun Desouza',
    role: 'Head Coach',
    philosophy: [
      "My coaching philosophy is centred on the development of the player, both on and off the field. I believe that strong rugby players are first built on core skills, developed through dedication, desire, and a relentless commitment to improvement. Team culture is non-negotiable. Individual growth must always serve the collective.",
      "Players learn that there is \"no 'I' in TEAM and no 'I' in 'WE' — unless you're speaking French.\" Success is built through selflessness, accountability, and the willingness to uplift one another for the betterment of the group.",
      "Above all, my purpose is to 'capture the heart behind the jersey' to develop players who play with pride, resilience, and purpose, who leave the programme as better rugby players, better teammates, and better people.",
      "At the heart of my approach are the pillars of discipline, self-pride, and respect for others. These values shape not only performance but character. Players are taught to respect the jersey they wear, the teammates beside them, the opposition they face, and the game itself.",
      "I empower creativity and players to express themselves. By mastering the fundamentals and embracing systems, players gain the freedom to thrive within the chaos of the game \"to structure the unstructured\" and make confident decisions under pressure turn defense into attack."
    ],
    pillars: ['Discipline', 'Self-Pride', 'Respect for Others']
  };

  const u14CoachPhilosophy = {
    name: 'Shelton Chiuswa',
    role: 'U14 Coach',
    philosophy: [
      "My coaching philosophy is centred on developing players first and results second, because sustainable success is built on strong people. I believe excellence in rugby comes from discipline, core skills, effort, and a daily commitment to improvement, with individual ambition always serving the team.",
      "Team culture is non-negotiable, and I demand respect for the jersey, teammates, opponents, and the game itself. I empower players to think, adapt, and express themselves, using structure as a foundation to make confident decisions when the game becomes unstructured and pressure is highest.",
      "Above all, my aim is for every player to leave the programme as a better rugby player, better teammate, and better person, playing with pride, resilience, and purpose."
    ],
    pillars: ['Player Development', 'Discipline & Core Skills', 'Respect & Team Culture']
  };

  const cubsCoachPhilosophy = {
    name: 'Abraham `Bobo` Rwodzi',
    role: 'Cubs Coach',
    philosophy: [
      "My coaching philosophy is based on developing smart, confident, and resilient rugby players within a clear team structure and a positive, disciplined culture.",
      "I believe rugby should be player-centred, where young athletes are taught why they do things, not just what to do. My role as a coach is to guide players to understand the game, make better decisions under pressure, and grow both on and off the field."
    ],
    pillars: ['Smart Players', 'Confidence Building', 'Resilience & Decision-Making']
  };

  const philosophies = {
    'Shaun Desouza': headCoachPhilosophy,
    'Shelton Chiuswa': u14CoachPhilosophy,
    'Abraham `Bobo` Rwodzi': cubsCoachPhilosophy
  };

  const handleCoachClick = (member) => {
    const coachPhilosophy = philosophies[member.name];
    if (coachPhilosophy) {
      setSelectedCoach(coachPhilosophy);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCoach(null);
  };

  return (
    <section id="technical-team" className="section technical-team-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Team</h2>
          <div className="title-underline"></div>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => {
            const hasPhilosophy = philosophies[member.name];
            return (
              <div 
                key={index} 
                className={`team-card ${hasPhilosophy ? 'clickable' : ''}`}
                onClick={() => hasPhilosophy && handleCoachClick(member)}
                style={{ cursor: hasPhilosophy ? 'pointer' : 'default' }}
              >
                <div className="team-avatar">
                  {member.initials || getInitials(member.name)}
                </div>
                <h3>{member.name}</h3>
                <p className={`team-role ${member.isManager ? 'manager' : ''}`}>
                  {member.role}
                </p>
                {hasPhilosophy && (
                  <div className="philosophy-badge">
                    <span className="badge-icon">📖</span>
                    <span className="badge-text">View Philosophy</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <PhilosophyModal 
        coach={selectedCoach} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default TechnicalTeam;

