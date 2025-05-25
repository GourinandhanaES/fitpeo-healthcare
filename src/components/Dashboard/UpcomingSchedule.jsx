import React from 'react';
import SimpleAppointmentCard from './SimpleAppoinmentCard';
import upcomingAppointments from '../../data/appointments.js';
import "../../styles/App.css"

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="section-title">The Upcoming Schedule</h3>
      {upcomingAppointments.map((group, index) => (
        <div key={index} className="appointment-group">
          <div className="group-day">{group.day}</div>
          <div className="group-cards">
            {group.appointments.map((item, idx) => (
              <SimpleAppointmentCard
                key={idx}
                title={item.title}
                time={item.time}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
