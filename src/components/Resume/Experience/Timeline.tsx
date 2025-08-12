import React from 'react';

interface TimelineItem {
  company: string;
  position: string;
  period: string;
  achievements: string[];
  logo?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="timeline-container">
      {/* Center line */}
      <div className="timeline-line" />

      {items.map((item, index) => (
        <div key={index} className="timeline-item">
          {/* Timeline card */}
          <div className="timeline-card">
            <h3>{item.position}</h3>
            <div className="company">{item.company}</div>
            <div className="period">{item.period}</div>
            <ul>
              {item.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex}>{achievement}</li>
              ))}
            </ul>
          </div>

          {/* Center logo */}
          <div className="timeline-logo">
            {item.logo ? (
              <img src={item.logo} alt={`${item.company} logo`} />
            ) : (
              <div className="fallback">{item.company.charAt(0)}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
