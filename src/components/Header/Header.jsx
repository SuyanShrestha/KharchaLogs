import React from "react";
import "./Header.css";

import { FaChartPie } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      {/* logo and searchbar */}
      <div className="header-top">
        {/* logo */}
        <div className="header-logo">
          <h1>खर्चLogs</h1>
          <img src="/favicon.png" alt="" />
        </div>

        {/* charts */}
        <div className="header-charts-button">
          <FaChartPie />
          <span>Charts</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
