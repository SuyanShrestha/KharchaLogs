import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  Chart,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// For error due to unregistered PointElement
Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const LineChart = () => {
  const { expenseList: list } = useSelector((state) => state.expenses);

  const latestExpenses = list
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(-7);

  console.log(latestExpenses);

  const dates = latestExpenses.map((expense) =>
    new Date(expense.createdAt).toLocaleDateString()
  );

  const titles = latestExpenses.map((expense) => expense.title);
  const amounts = latestExpenses.map((expense) => expense.amount);

  return (
    <div className="line-chart">
      <Line
        data={{
          labels: titles,
          datasets: [
            {
              label: "Expenses Over Time",
              data: amounts,
              fill: false,
              borderColor: "rgba(66, 135, 245, 0.6)",
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
