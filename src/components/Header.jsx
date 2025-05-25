// Header.jsx
import React from 'react';
import { FaBell, FaPlus, FaSearch } from 'react-icons/fa';
import profileImg from '../assets/avatar.png';
import "../styles/App.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-section left">
        <div className="logo"><span className="logo-highlight">Health</span>care.</div>
      </div>
      <div className="header-section middle">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" disabled />
          <FaBell className="bell-icon" />
        </div>
      </div>
      <div className="header-section right">
        <img src={profileImg} alt="User Avatar" className="header-user" />
        <button className="add-btn"><FaPlus /></button>
      </div>
    </div>
  );
};

export default Header;
