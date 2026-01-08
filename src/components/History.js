import React from 'react';

const History = () => {
  const timelineItems = [
    {
      year: '1898',
      title: 'Foundation',
      content: 'Prince Edward School is established on 13 June 1898 in Salisbury (now Harare). Rugby is introduced in the early years as a core winter sport, aligned with British public-school traditions of character building through sport.'
    },
    {
      year: '1900s',
      title: 'Rugby Embedded in School Culture',
      content: 'Rugby becomes firmly established as a pillar of school life. Inter-school fixtures emerge, laying the foundations for long-standing rivalries and competitive schoolboy rugby in Rhodesia.'
    },
    {
      year: '1930s–1950s',
      title: 'Competitive Identity Formed',
      content: 'Prince Edward develops a reputation as a physically tough, disciplined rugby school. Regular fixtures against leading schools strengthen rugby structures and traditions. The Tigers identity and strong spectator culture begin to take shape.'
    },
    {
      year: '1960s–1970s',
      title: 'Expansion & Recognition',
      content: 'The First XV gains recognition for competitive performances in national schools competitions. Prince Edward rugby becomes a key contributor to provincial and national schoolboy selections. Alumni begin progressing into senior club and representative rugby.'
    },
    {
      year: '1980',
      title: 'Post-Independence Era',
      content: 'Following Zimbabwe\'s independence, Prince Edward continues to be a flagship rugby school. The programme adapts to a changing national rugby landscape while maintaining high standards.'
    },
    {
      year: '1980s–1990s',
      title: 'Competitive Consistency',
      content: 'The Tigers record strong seasons in inter-schools rugby. Rugby at Prince Edward is characterised by structured coaching, physical preparation, and strong team culture.'
    },
    {
      year: 'Mid-1990s',
      title: 'Birth of the Festival Era',
      content: 'Cottco Rugby Festival is launched at Prince Edward School. The festival rapidly becomes one of the largest and most prestigious schools rugby events in Zimbabwe. Hundreds of teams participate annually across multiple age groups (U16, 2nd XV, 1st XV).',
      highlight: true
    },
    {
      year: 'Late 1990s–2000s',
      title: 'Golden Festival Years',
      content: 'The Cottco Rugby Festival attracts national attention and visiting teams. Prince Edward becomes a central hub for schools rugby development. The festival plays a major role in talent identification and rugby growth nationwide.'
    },
    {
      year: '2000s',
      title: 'Alumni on the World Stage',
      content: 'Former pupils progress to professional and international rugby. Notable alumni include Tonderai Chavhanga, who advances from PE rugby to professional ranks. Former players contribute as coaches, administrators, and mentors within Zimbabwe and abroad.'
    },
    {
      year: '2010s',
      title: 'Transition & Resilience',
      content: 'Structural and economic challenges affect school rugby nationally. Despite disruptions to traditional competitions and festivals, Prince Edward maintains its rugby identity and development focus.'
    },
    {
      year: '2020–2022',
      title: 'Pandemic Impact',
      content: 'COVID-19 disrupts school rugby calendars, including festivals and fixtures. The rugby programme focuses on continuity, player welfare, and rebuilding participation.'
    },
    {
      year: '2023–Present',
      title: 'Renewal & Pathway Focus',
      content: 'Prince Edward rugby continues to evolve with renewed emphasis on player development pathways, competitive inter-school fixtures, leadership, discipline, and values-based rugby. The legacy of the Tigers and the festival era continues to inspire current and future generations.'
    }
  ];

  return (
    <section id="history" className="section history-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Rugby History & Traditions</h2>
          <div className="title-underline"></div>
        </div>
        
        {/* History Content */}
        <div className="history-content">
          <div className="history-card">
            <h3>Early Roots</h3>
            <p>
              Prince Edward School adopted rugby early in its sporting development, becoming one of the foremost rugby schools in Zimbabwe. Over decades, the sport has been embedded in the school ethos, drawing large crowds of pupils and supporters for major fixtures.
            </p>
          </div>
          <div className="history-card highlight">
            <h3>The Festival Era</h3>
            <p>
              Prince Edward is historically known for hosting the <strong>Cottco Rugby Festival</strong>, an annual schools' rugby event started in the mid-1990s that became a highlight of the Zimbabwe schools rugby calendar.
            </p>
            <p>
              This festival once attracted hundreds of teams from across Zimbabwe and beyond, promoting the game at U16, 2nd team and 1st team levels and offering a major platform for aspiring young players to showcase their talents.
            </p>
            <p>
              Though recent years have brought challenges — including cancellations and structural shifts in school rugby competitions — the festival legacy remains a cornerstone of Prince Edward's contribution to the sport.
            </p>
          </div>
          <div className="history-card">
            <h3>Achievements & Legacy</h3>
            <ul className="achievements-list">
              <li>The First XV Tigers have recorded unbeaten seasons and memorable victories in competitive inter-schools play.</li>
              <li>The programme has developed players who have gone on to represent provincial, national, and international teams.</li>
            </ul>
          </div>
          <div className="history-card">
            <h3>Development & Pathways</h3>
            <p>
              The rugby programme includes structured coaching, age-grade teams, and competitive fixtures against top schools, giving aspiring players clear pathways to higher honours in club, provincial, or national rugby.
            </p>
            <p>
              Prince Edward continues to foster talent, encourage sportsmanship, and uphold the tradition of excellence in one of Zimbabwe's most cherished school sports.
            </p>
          </div>
        </div>

        {/* Historical Timeline */}
        <div className="history-timeline-section">
          <div className="section-header">
            <h3 className="section-subtitle">Historical Timeline</h3>
            <div className="title-underline"></div>
          </div>
          <div className="timeline">
            {timelineItems.map((item, index) => (
              <div key={index} className={`timeline-item ${item.highlight ? 'highlight' : ''}`}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;

