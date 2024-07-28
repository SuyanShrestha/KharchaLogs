import React from "react";
import "./Charts.css";
import { useSelector } from "react-redux";

// components
import PieChart from "../../components/PieChart/PieChart";
import BarChart from "../../components/BarChart/BarChart";
import LineChart from "../../components/LineChart/LineChart";

import LottieIcons from "../../components/LottieIcons/LottieIcons";
import EmptyLottie2 from "../../assets/lottie/EmptyLottie2.json";

const Charts = () => {
  const categorySums = useSelector((state) => state.expenses.categorySums);

  if (!categorySums || Object.keys(categorySums).length === 0) {
    return (
      <div className="empty-chart">
        <h1>~ Whoa! So कन्जुस ~</h1>
        <LottieIcons animationData={EmptyLottie2} width={600} />
      </div>
    );
  }

  return (
    <div className="charts-div">
      <h1>~ Charts ~</h1>
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
