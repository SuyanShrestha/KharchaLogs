import React from "react";
import "./Add.css";

import TopLayout from "../../components/TopLayout/TopLayout";
import AddForm from "../../components/AddForm/AddForm";

const Add = () => {
  return (
    <div className="add">
      <TopLayout />
      <AddForm />
    </div>
  );
};

export default Add;
