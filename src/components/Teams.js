import React, { useState } from 'react';

const Teams = () => {
  const [expandedTeam, setExpandedTeam] = useState(null);

  const teams = [
    {
      name: 'Tigers',
      category: 'Senior',
      description: 'First XV',
      players: [
        // Add players here with: { name: '', dateOfBirth: '', position: '' }
      ]
    },
    {
      name: 'Seconds',
      category: 'Senior',
      description: 'Second XV',
      players: [
        // Add players here with: { name: '', dateOfBirth: '', position: '' }
      ]
    },
    {
      name: 'Thirds',
      category: 'Senior',
      description: 'Third XV',
      players: [
        // Add players here with: { name: '', dateOfBirth: '', position: '' }
      ]
    },
    {
      name: 'Cubs',
      category: 'Under 16',
      description: 'Cubs Team',
      players: [
        // Add players here with: { name: '', dateOfBirth: '', position: '' }
      ]
    },
    {
      name: 'Super Seconds',
      category: 'Under 16',
      description: 'Super Second XV',
      players: [
        // Add players here with: { name: '', dateOfBirth: '', position: '' }
      ]
    },
    {
      name: 'U15A',
      category: 'Under 15',
      description: 'First Team',
      players: [
        // Add players here with: { name: '', dateOfBirth: '', position: '' }
      ]
    },
    {
      name: 'U15B',
      category: 'Under 15',
      description: 'Second Team',
      players: [
        // Add players here with: { name: '', dateOfBirth: '', position: '' }
      ]
    },
    {
      name: 'U14A',
      category: 'Under 14',
      description: 'First Team',
      players: [
        // Add players here with: { name: '', dateOfBirth: '', position: '' }
      ]
    },
    {
      name: 'U14B',
      category: 'Under 14',
      description: 'Second Team',
      players: [
        // Add players here with: { name: '', dateOfBirth: '', position: '' }
      ]
    }
  ];

  const getTeamInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 3);
  };

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Senior':
        return 'var(--maroon)';
      case 'Under 16':
        return 'var(--green)';
      case 'Under 15':
        return '#2d5016';
      case 'Under 14':
        return '#666';
      default:
        return 'var(--text-gray)';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return '';
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const toggleTeam = (index) => {
    setExpandedTeam(expandedTeam === index ? null : index);
  };

  return (
    <section id="teams" className="section teams-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Teams</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Prince Edward School Rugby fields teams across multiple age groups and levels, 
            providing opportunities for players of all abilities to represent the Tigers.
          </p>
        </div>
        <div className="teams-container">
          {teams.map((team, index) => (
            <div key={index} className="team-expandable-card">
              <div 
                className="team-card-header"
                onClick={() => toggleTeam(index)}
                style={{ borderColor: getCategoryColor(team.category) }}
              >
                <div className="team-header-content">
                  <div 
                    className="team-badge" 
                    style={{ borderColor: getCategoryColor(team.category) }}
                  >
                    <div className="team-badge-initials">
                      {getTeamInitials(team.name)}
                    </div>
                  </div>
                  <div className="team-badge-info">
                    <h3 className="team-badge-name">{team.name}</h3>
                    <p className="team-badge-category" style={{ color: getCategoryColor(team.category) }}>
                      {team.category}
                    </p>
                    <p className="team-badge-description">{team.description}</p>
                    <p className="team-player-count">
                      {team.players && team.players.length > 0 
                        ? `${team.players.length} Player${team.players.length !== 1 ? 's' : ''}`
                        : 'No players added yet'}
                    </p>
                  </div>
                </div>
                <button className="team-expand-button" aria-label={expandedTeam === index ? 'Collapse team' : 'Expand team'}>
                  {expandedTeam === index ? '−' : '+'}
                </button>
              </div>
              
              {expandedTeam === index && (
                <div className="team-players-list">
                  {team.players && team.players.length > 0 ? (
                    <>
                      <div className="players-table-header">
                        <div className="player-header-cell">Player Name</div>
                        <div className="player-header-cell">Date of Birth</div>
                        <div className="player-header-cell">Age</div>
                        <div className="player-header-cell">Position</div>
                      </div>
                      <div className="players-list">
                        {team.players.map((player, playerIndex) => (
                          <div key={playerIndex} className="player-row">
                            <div className="player-cell player-name">{player.name || 'N/A'}</div>
                            <div className="player-cell player-dob">
                              {player.dateOfBirth ? formatDate(player.dateOfBirth) : 'N/A'}
                            </div>
                            <div className="player-cell player-age">
                              {player.dateOfBirth ? calculateAge(player.dateOfBirth) : 'N/A'}
                            </div>
                            <div className="player-cell player-position">{player.position || 'N/A'}</div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="no-players-message">
                      <p>No players have been added to this team yet. Please contact the team manager to add player information.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;

