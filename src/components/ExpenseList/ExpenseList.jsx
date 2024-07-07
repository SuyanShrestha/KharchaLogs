import React, { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";

import food from "../../assets/icons/food.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { debounce } from 'lodash';

import "./ExpenseList.css";
import { handleCategorySums } from "../../redux/actions/expenses";

const ExpenseList = () => {

  const dispatch = useDispatch();

  const [filteredList, setFilteredList] = useState([]);

  // const [categorySums, setCategorySums] = useState({});
  const categorySums = useSelector((state) => state.expenses.categorySums);

  // lemme destruct the expenses from the state
  const { expenseList: list, searchQuery } = useSelector(
    (state) => state.expenses
  );

  // filtering the list based on the query
  const debounceTimeoutRef = useRef(null);

  const handleFilter = (list, query) => {
    setFilteredList(
      list.filter(
        (item) =>
          item.title &&
          (query === "" ||
            item.title.toLowerCase().includes(query.toLowerCase()))
      )
    );
  };

  // useEffect for search
  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(() => {
      handleFilter(list, searchQuery);
    }, 500);
  }, [list, searchQuery]);

  // useEffect for category sums
  useEffect(() => {
    let categories = [
      "Food",
      "Health",
      "Education",
      "Entertainment",
      "Miscellaneous",
    ];
    let sums = {};
    categories.forEach((category) => {
      sums[category] = list
        .map((expense) => {
          // console.log(expense);
          return expense;
        })
        .filter(
          (expense) => expense.category && expense.category.name === category
        )
        .reduce((sum, current) => sum + current.amount, 0);
    });

    // setCategorySums(sums);
    dispatch(handleCategorySums(sums));
  }, [list, dispatch]);

  // just for check
  useEffect(() => {
    console.log(categorySums);
  }, [categorySums]);

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
          <Card
            item={item}
            notifySuccess={notifySuccess}
            key={item.createdAt}
          />
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
