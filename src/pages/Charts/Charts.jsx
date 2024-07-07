import React from "react";
import "./Charts.css";
import PieChart from "../../components/PieChart/PieChart";
import BarChart from "../../components/BarChart/BarChart";

const Charts = () => {
  return (
    <div className="charts-div">
      <h1>Charts</h1>
      <div className="top-div"></div>
      <div className="bottom-div">
        <div className="pie-div">
          <PieChart />
        </div>
        <div className="bar-div">
            <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Charts;
