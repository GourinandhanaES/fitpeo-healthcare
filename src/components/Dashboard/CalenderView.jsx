import React from 'react';
import { calendarDays, appointmentCards } from '../../data/calendarData';
import '../../styles/App.css';

const CalendarView = () => {
  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <h3 className="calendar-month">October 2021</h3>
        <div className="nav-arrows">
          <span className="arrow">◀</span>
          <span className="arrow">▶</span>
        </div>
      </div>

      <div className="calendar-grid">
        {calendarDays.map((day, index) => (
          <div
            className={`calendar-day ${index === 1 ? "active-day day-highlight" : ""} ${index === 6 ? "dimmed" : ""}`}
            key={index}
          >
            <span className="day">{day.day}</span><br />
            <span className="date">{day.date}</span>
            <div className="slots">
              {day.slots.map((slot, i) => (
                <div key={i} className={`time-slot ${ index === 1 && slot === "09:00" ? "active-slot"
                      : (index === 3 && slot === "11:00") || (index === 5 && slot === "12:00") || (index === 6 && slot === "09:00") 
                      ? "dimmed-slot"
                      : ""
                  }`}
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="cards-wrapper">
        <div className="calendar-card" style={{ backgroundColor: appointmentCards[0].bgColor, color: appointmentCards[0].textColor }}>
          <div className="card-title">
            {appointmentCards[0].title}
            <img className='calender-icon' src={appointmentCards[0].icon} alt="" />
          </div>
          <div className="card-details">
            {appointmentCards[0].time}
            <br />
            {appointmentCards[0].doctor}
          </div>
        </div>

        <div className="calendar-card long-card" style={{ backgroundColor: appointmentCards[1].bgColor, color: appointmentCards[1].textColor }}>
          <div className="card-title">
            {appointmentCards[1].title}
            <img className='calender-icon' src={appointmentCards[1].icon} alt="" />
          </div>
          <div className="card-details">
            {appointmentCards[1].time}
            <br />
            {appointmentCards[1].doctor}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;