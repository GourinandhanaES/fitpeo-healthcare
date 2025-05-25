import React from 'react';
import AnatomySection from '../Dashboard/AnatomySection';
import HealthStatusCards from '../Dashboard/HealthStatusCards';
import CalendarView from '../Dashboard/CalenderView';
import UpcomingSchedule from '../Dashboard/UpcomingSchedule';
import ActivityFeed from '../Dashboard/ActivityFeed';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <div className='dashleft-head'><h1>Dashboard</h1>
        <span className="week-link">This Week →</span></div>
        <div className="overview">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <span className="details-link">Details →</span>
        <ActivityFeed />
      </div>
      <div className="dashboard-right">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
