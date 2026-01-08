import React, { useState } from 'react';

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Events will be added when fixtures are available
  const events = [];

  const getEventTypeColor = (type) => {
    switch(type) {
      case 'match':
        return 'var(--maroon)';
      case 'tournament':
        return 'var(--green)';
      case 'training':
        return '#666';
      default:
        return 'var(--text-gray)';
    }
  };

  const getEventTypeLabel = (type) => {
    switch(type) {
      case 'match':
        return 'Match';
      case 'tournament':
        return 'Tournament';
      case 'training':
        return 'Training';
      default:
        return 'Event';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section id="calendar" className="section calendar-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Upcoming Events & Fixtures</h2>
          <div className="title-underline"></div>
        </div>
        <div className="calendar-content">
          {events.length > 0 ? (
            <div className="events-list">
              {events.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-date-badge" style={{ borderColor: getEventTypeColor(event.type) }}>
                    <div className="event-day">{new Date(event.date).getDate()}</div>
                    <div className="event-month">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                  </div>
                  <div className="event-details">
                    <div className="event-header">
                      <h3 className="event-title">{event.title}</h3>
                      <span className="event-type" style={{ backgroundColor: getEventTypeColor(event.type) }}>
                        {getEventTypeLabel(event.type)}
                      </span>
                    </div>
                    <div className="event-info">
                      <p className="event-date-full">{formatDate(event.date)}</p>
                      <p className="event-time">⏰ {event.time}</p>
                      <p className="event-location">📍 {event.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-events">
              <div className="no-events-icon">📅</div>
              <h3>No Current Fixtures</h3>
              <p>Fixtures and events will be posted here when available. Please check back soon or contact us for more information.</p>
            </div>
          )}
          <div className="calendar-note">
            <p>📅 <strong>Note:</strong> Fixtures and events are subject to change. Please check with the school for the most up-to-date information.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;

