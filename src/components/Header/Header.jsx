import React from "react";
import "./Header.css";

import { FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";

import LottieIcons from "../LottieIcons/LottieIcons";
import LogoLottie1 from "../../assets/lottie/LogoLottie2.json";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header-logo">
            <h1>खर्चLogs</h1>
            <LottieIcons animationData={LogoLottie1} width={70} />
          </div>
        </Link>

        {/* charts */}
        <Link to="/charts" style={{ textDecoration: "none" }}>
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
