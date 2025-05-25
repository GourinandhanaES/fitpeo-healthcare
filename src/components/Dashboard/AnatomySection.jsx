import React from 'react';
import { anatomyData } from '../../data/healthData';
import humanBodyImg from '../../assets/anatomy.png'; 
import { FiSearch } from 'react-icons/fi';

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="zoom-button">
        <FiSearch size={18} />
      </div>
      <img src={humanBodyImg} alt="Human Anatomy" className="anatomy-image" />
      {anatomyData.map((item, index) => (
        <div
          key={index}
          className={`anatomy-indicator ${item.status.toLowerCase()} ${item.type}`}
          style={{ top: item.position.top, left: item.position.left }}
        >
          <img src={item.icon} alt={item.label} className="icon" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default AnatomySection;
