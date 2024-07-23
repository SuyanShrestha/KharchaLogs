import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./PieChart.css";

import { useSelector } from "react-redux";

import {
  ArcElement,
  CategoryScale,
  Chart,
  DoughnutController,
  Legend,
  Tooltip,
} from "chart.js";

Chart.register(DoughnutController, ArcElement, CategoryScale, Tooltip, Legend);

const PieChart = () => {
  const categorySums = useSelector((state) => state.expenses.categorySums);

  return (
    <div className="pie-chart">
      <Doughnut
        data={{
          labels: Object.keys(categorySums),
          datasets: [
            {
              label: "Expenses",
              data: Object.values(categorySums),
              backgroundColor: [
                "rgba(66, 135, 245, 0.6)",
                "rgba(245, 159, 66, 0.6)",
                "rgba(245, 66, 209, 0.6)",
                "rgba(66, 245, 188, 0.6)",
                "rgba(245, 66, 66, 0.6)",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default PieChart;
