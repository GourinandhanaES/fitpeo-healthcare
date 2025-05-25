import React from 'react';
import "../../styles/App.css"

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-card">
      <div className="info">
        <div className='infoo'>
          <div className="title">{title}</div>
          <div className="icon"><img src={icon} alt=""/></div>
        </div>
        <div className="time">{time}</div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
