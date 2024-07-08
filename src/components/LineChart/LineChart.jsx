import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  LineController,
  LineElement,
  PointElement, // import PointElement
  CategoryScale,
  Chart,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register PointElement along with other elements
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

  // basic dsa sorting mechanism
  const latestExpenses = list
    .sort((a, b) => b.createdAt - a.createdAt)
    .reverse()
    .slice(0, 7).reverse();

  console.log(latestExpenses);

  // Get the dates and amounts of the latest expenses
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
