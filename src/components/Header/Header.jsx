import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      {/* logo and searchbar */}
      <div className="header-top">
        <div className="header-logo">
          <h1>खर्चLogs</h1>
          <img src="/favicon.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
