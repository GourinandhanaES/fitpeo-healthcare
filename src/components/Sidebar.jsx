import React from 'react';
import navigation from '../data/navigation';
import '../styles/App.css';

const Sidebar = () => {
  const bottomSection = navigation.find(section => section.section === 'Bottom');
  const otherSections = navigation.filter(section => section.section !== 'Bottom');

  return (
    <div className="sidebar">
      <div className="sidebar-section">
        {otherSections.map((section) => (
          <div key={section.section}>
            <p className="sidebar-heading">{section.section}</p>
            <ul className="sidebar-links">
              {section.links.map((item) => (
                <li key={item.label} className={`sidebar-link ${item.isActive ? 'active' : ''}`}>
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="sidebar-bottom">
        <ul className="sidebar-links">
          {bottomSection.links.map((item) => (
            <li key={item.label} className="sidebar-link">
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
