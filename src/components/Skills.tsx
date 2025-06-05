import React from 'react';
import '../css/skills.css';

const TechStack: React.FC = () => {
  const techStack = [
    {
      name: 'FrontEnd',
      technology: 'HTML | CSS | JS | React | TypeScript | Node.JS ',
      icon: 'web_asset',
      color: '#FF0000',
    },
    {
      name: 'Sport Programming',
      technology: 'C | C++',
      icon: 'timer',
      color: '#ff9000',
    },
    {
      name: 'DevOps',
      technology: 'Git | Docker | CI/CD | Prometheus | Grafana',
      icon: 'add_task',
      color: '#ccf600',
    },
    {
      name: 'Databases',
      technology: 'PostgreSQL | MySQL | NoSQL | PGadmin | MongoDB | Cassandra',
      icon: 'storage',
      color: '#58e000',
    },
    {
      name: 'Linux',
      technology: 'Shell | C',
      icon: 'terminal',
      color: '#01939a ',
    },
    {
      name: 'Application development',
      technology: 'Android Studio | Java | Swift | Flutter | Dart',
      icon: 'phone_iphone',
      color: '#000',
    },
    {
      name: 'Telegram Bots',
      technology: 'Python',
      icon: 'smart_toy',
      color: '#1531AE',
    },
    {
      name: 'Design',
      technology: 'Adobe Photoshop | Adobe Illustrator | Figma',
      icon: 'palette',
      color: '#00B060',
    },
    {
      name: 'Team methodology',
      technology: 'SOLID | AGILE | PRINCE2',
      icon: 'handshake',
      color: '#9c27b0',
    },
    {
      name: 'Languages',
      technology: 'Russian | English',
      icon: 'g_translate',
      color: '#520EAD',
    },
  ];

  return (
    <div id="exp" className="tech-stack-page">
      <h1 className="title">Experience</h1>
      <p className="tech-stack-description">
        The time spent on creating a school or student project, on products
        specifically for customers or during any probationary period, as well as
        test tasks or contests with tasks are taken into account.
      </p>
      <div className="tech-stack-grid">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-stack-box">
            <span
              className="material-icons tech-icon"
              style={{ color: tech.color }}
            >
              {tech.icon}
            </span>
            <h3>{tech.name}</h3>
            <p>{tech.technology}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
