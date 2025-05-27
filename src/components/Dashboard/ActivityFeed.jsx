import React from 'react';

const barData = [
  [
    [{ height: 90, color: '#cacad3' }],
    [{ height: 50, color: '#24b0d8' }],
    [{ height: 20, color: '#cacad3' }, { height: 20, color: '#cacad3' }],
    [{ height: 30, color: '#cacad3' }],
    [{ height: 40, color: '#24b0d8' }, { height: 50, color: '#3a3a94' }],
    [{ height: 50, color: '#3a3a94' }],
    [{ height: 15, color: '#cacad3' }, { height: 15, color: '#cacad3' }],
    [{ height: 20, color: '#24b0d8' }],
    [{ height: 90, color: '#cacad3' }],
    [{ height: 50, color: '#cacad3' }],
    [{ height: 20, color: '#24b0d8' }, { height: 20, color: '#3a3a94' }],
    [{ height: 30, color: '#3a3a94' }],
    [{ height: 40, color: '#cacad3' },{ height: 50, color: '#cacad3' }],
    [{ height: 50, color: '#24b0d8' }],
    [{ height: 20, color: '#24b0d8' },{ height: 20, color: '#3a3a94' }],
    [{ height: 30, color: '#cacad3' }],
    [{ height: 90, color: '#cacad3' }],
    [{ height: 50, color: '#3a3a94' }],
    [{ height: 20, color: '#cacad3' },{ height: 20, color: '#cacad3' }],
    [{ height: 30, color: '#cacad3' }],
    [{ height: 50, color: '#24b0d8' },{ height: 40, color: '#3a3a94' }],
    [{ height: 50, color: '#24b0d8' }],
    [{ height: 20, color: '#cacad3' }, { height: 20, color: '#cacad3' }],
    [{ height: 30, color: '#3a3a94' }],
    [{ height: 90, color: '#cacad3' }],
    [{ height: 50, color: '#cacad3' }],
    [{ height: 20, color: '#24b0d8' },{ height: 20, color: '#3a3a94' }],
    [{ height: 30, color: '#3a3a94' }],
    [{ height: 50, color: '#cacad3' },{ height: 40, color: '#cacad3' }],
    [{ height: 50, color: '#24b0d8' }],
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
        {barData[0].map((segments, idx) => {
        let marginBottom = 0;

         if ([1, 5, 9, 13, 17, 21, 25, 29].includes(idx)) {
          marginBottom = 20;
        } else if ([2, 6, 10, 14, 18, 22, 26, 30].includes(idx)) {
          marginBottom = 15;
        } else if ([3, 7, 11, 15, 19, 23, 27, 31].includes(idx)) {
          marginBottom = 8;
        }

        return (
    <div key={idx} className="bar-wrapper">
      <div className="bar-stack" style={{ marginBottom: `${marginBottom}px` }}>
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
  );
})}
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
