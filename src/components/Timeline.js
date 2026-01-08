import React from 'react';

const Timeline = () => {
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
    <section id="timeline" className="section timeline-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Historical Timeline</h2>
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
    </section>
  );
};

export default Timeline;

