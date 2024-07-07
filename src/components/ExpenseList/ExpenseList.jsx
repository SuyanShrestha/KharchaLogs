import React, {useEffect, useRef, useState} from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

import food from "../../assets/icons/food.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { debounce } from 'lodash';

import "./ExpenseList.css";

const ExpenseList = () => {

  const [filteredList, setFilteredList] = useState([]);

  // lemme destruct the expenses from the state
  const { expenseList: list, searchQuery } = useSelector(
    (state) => state.expenses
  );

  // filtering the list based on the query
  const debounceTimeoutRef = useRef(null);

  const handleFilter = (list, query) => {
    setFilteredList(list.filter(
      (item) =>
        item.title &&
        (query === "" || item.title.toLowerCase().includes(query.toLowerCase()))
    ));
  };


  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(() => {
      handleFilter(list, searchQuery);
    }, 500);
  }, [list, searchQuery]);

  const notifySuccess = () => toast.success("Expense deleted successfully");
  return (
    <div className="expense-list">
      {/* TOAST */}
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />

      {filteredList && filteredList.length ? (
        filteredList.map((item) => (
          <Card item={item} notifySuccess={notifySuccess} />
        ))
      ) : (
        <div className="empty-state">
          <img src={food} alt="empty-image" className="empty-image" />
          <h3 className="empty-text">No expenses added yet!</h3>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
