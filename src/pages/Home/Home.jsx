import React, { useState } from "react";
import "./Home.css";

import TopLayout from "../../components/TopLayout/TopLayout";
import ExpenseList from "../../components/ExpenseList/ExpenseList";

const Home = () => {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="home">
      <TopLayout sortOpen={sortOpen} setSortOpen={setSortOpen} />
      <ExpenseList sortOpen={sortOpen} setSortOpen={setSortOpen} />
    </div>
  );
};

export default Home;
