import React from 'react';
import './styles/App.css';
import Header from './components//Header';
import Sidebar from './components//Sidebar';
import DashboardMainContent from './components/Dashboard/DashboardMainContent';

const App = () => {
  return (
    <div className="app-container">
      <div className="dashboard-wrapper">
        <div className="main-content">
          <Header />
          <div className="content-body">
            <Sidebar />
            <DashboardMainContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
