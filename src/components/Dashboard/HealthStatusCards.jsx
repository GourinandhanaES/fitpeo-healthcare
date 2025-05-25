import React from 'react';
import { healthCards } from '../../data/healthData';

const HealthStatusCards = () => {
  return (
    <div className="health-cards-container">
      {healthCards.map((card, index) => (
        <div key={index} className="health-card">
          <div className="card-header">
            <img src={card.icon} alt={card.title} className="icon-image" />
            <span className="card-title">{card.title}</span>
          </div>
          <div className="card-date">Date: {card.date}</div>
          <div className="card-progress-bar">
            <div
              className="progress-line-filled"
              style={{ backgroundColor: card.progressColor }}
            ></div>
            <div className="progress-line-empty"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
