import React from "react";
import "./Header.css";

import { FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      {/* logo and searchbar */}
      <div className="header-top">
        {/* logo */}
        <Link to="/" style={{textDecoration: "none"}}>
          <div className="header-logo">
            <h1>खर्चLogs</h1>
            <img src="/favicon.png" alt="" />
          </div>
        </Link>

        {/* charts */}
        <Link to="/charts" style={{textDecoration: 'none'}}>
          <div className="header-charts-button">
            <FaChartPie />
            <span>Charts</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
