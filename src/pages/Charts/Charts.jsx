import React from "react";
import "./Charts.css";
import { useSelector } from "react-redux";

// components
import PieChart from "../../components/PieChart/PieChart";
import BarChart from "../../components/BarChart/BarChart";
import LineChart from "../../components/LineChart/LineChart";

const Charts = () => {
  const categorySums = useSelector((state) => state.expenses.categorySums);

  if (!categorySums || Object.keys(categorySums).length === 0) {
    return (
      <div className="empty-chart">
        <h1>No records found</h1>
      </div>
    );
  }

  return (
    <div className="charts-div">
      <h1>Charts</h1>
      <div className="top-div">
        <LineChart />
      </div>
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
