import React from 'react';

const barData = [
  [
    [{ height: 90, color: '#cacad3' }],
    [{ height: 60, color: '#24b0d8' }],
    [{ height: 40, color: '#cacad3' }, { height: 30, color: '#cacad3' }],
    [{ height: 50, color: '#cacad3' }],
    [{ height: 40, color: '#24b0d8' }, { height: 50, color: '#3a3a94' }],
    [{ height: 50, color: '#3a3a94' }],
    [{ height: 15, color: '#cacad3' }, { height: 15, color: '#cacad3' }],
    [{ height: 20, color: '#24b0d8' }],
    [{ height: 90, color: '#cacad3' }],
    [{ height: 70, color: '#cacad3' }],
    [{ height: 30, color: '#24b0d8' }, { height: 20, color: '#3a3a94' }],
    [{ height: 40, color: '#3a3a94' }],
    [{ height: 40, color: '#cacad3' },{ height: 50, color: '#cacad3' }],
    [{ height: 60, color: '#24b0d8' }],
    [{ height: 20, color: '#24b0d8' },{ height: 30, color: '#3a3a94' }],
    [{ height: 40, color: '#cacad3' }],
    [{ height: 90, color: '#cacad3' }],
    [{ height: 30, color: '#3a3a94' }],
    [{ height: 30, color: '#cacad3' },{ height: 20, color: '#cacad3' }],
    [{ height: 30, color: '#cacad3' }],
    [{ height: 50, color: '#24b0d8' },{ height: 40, color: '#3a3a94' }],
    [{ height: 20, color: '#24b0d8' }],
    [{ height: 40, color: '#cacad3' }, { height: 10, color: '#cacad3' }],
    [{ height: 50, color: '#3a3a94' }],
    [{ height: 90, color: '#cacad3' }],
    [{ height: 30, color: '#cacad3' }],
    [{ height: 20, color: '#24b0d8' },{ height: 30, color: '#3a3a94' }],
    [{ height: 30, color: '#3a3a94' }],
    [{ height: 50, color: '#cacad3' },{ height: 40, color: '#cacad3' }],
    [{ height: 20, color: '#24b0d8' }],
    [{ height: 20, color: '#cacad3' },{ height: 20, color: '#cacad3' }],
    [{ height: 30, color: '#3a3a94' }],
  ],
];

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <p>3 appointments on this week</p>
      </div>
      <div className="activity-chart">
        {barData[0].map((segments, idx) => (
          <div key={idx} className="bar-wrapper">
            <div className="bar-stack">
              {segments.map((segment, i) => (
                <div
                  key={i}
                  className="bar-segment"
                  style={{
                    height: `${segment.height}%`,
                    backgroundColor: segment.color,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
       <div className="day-labels">
        {days.map((day, index) => (
          <div key={index} className="day-label">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
