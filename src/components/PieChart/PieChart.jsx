import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./PieChart.css";

import { ArcElement, CategoryScale, Chart, DoughnutController, Legend, Tooltip } from 'chart.js';

Chart.register(DoughnutController, ArcElement, CategoryScale, Tooltip, Legend);

const PieChart = () => {
  return (
    <div className="pie-chart">
      <Doughnut
        data={{
          labels: ["Food", "Health", "Education", "Entertainment", "Miscellaneous"],
          datasets: [
            {
              label: "Expenses",
              data: [300, 50, 100, 150, 200],
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default PieChart;
