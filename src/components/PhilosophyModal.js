import React from 'react';
import './PhilosophyModal.css';

const PhilosophyModal = ({ coach, isOpen, onClose }) => {
  if (!isOpen || !coach) return null;

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal-header">
          <div className="modal-avatar">
            {getInitials(coach.name)}
          </div>
          <div className="modal-title-section">
            <h3 className="modal-name">{coach.name}</h3>
            <p className="modal-role">{coach.role}</p>
          </div>
        </div>
        <div className="modal-body">
          <h4 className="modal-heading">Coaching Philosophy</h4>
          {coach.philosophy && coach.philosophy.map((paragraph, index) => (
            <p key={index} className="modal-paragraph">
              {paragraph}
            </p>
          ))}
          {coach.pillars && coach.pillars.length > 0 && (
            <div className="modal-pillars">
              <h5>Core Pillars</h5>
              <div className="modal-pillars-grid">
                {coach.pillars.map((pillar, index) => (
                  <div key={index} className="modal-pillar-item">
                    <span className="modal-pillar-icon">✓</span>
                    <span className="modal-pillar-text">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhilosophyModal;

