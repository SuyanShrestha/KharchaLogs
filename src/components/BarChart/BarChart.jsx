import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";
import { useSelector } from "react-redux";

import { BarController, BarElement, CategoryScale, Chart, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const categorySums = useSelector((state) => state.expenses.categorySums);

  return (
    <div className="bar-chart">
      <Bar
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

export default BarChart;
