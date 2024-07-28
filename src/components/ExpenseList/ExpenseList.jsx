import React, { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ExpenseList.css";
import { handleCategorySums } from "../../redux/actions/expenses";

import EmptyLottie from "../../assets/lottie/EmptyLottie.json";
import FilterLottie from "../../assets/lottie/FilterLottie.json";
import LottieIcons from "../LottieIcons/LottieIcons";

import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import { CiBookmarkRemove } from "react-icons/ci";

import { Link } from "react-router-dom";

const ExpenseList = ({ sortOpen, setSortOpen }) => {
  const dispatch = useDispatch();

  const [filteredList, setFilteredList] = useState([]);
  const [sortType, setSortType] = useState(null);

  const categorySums = useSelector((state) => state.expenses.categorySums);
  const [categoryFilter, setCategoryFilter] = useState("");

  const { expenseList: list, searchQuery } = useSelector(
    (state) => state.expenses
  );

  const debounceTimeoutRef = useRef(null);

  // for searching with search query
  const handleFilter = (list, query) => {
    let filteredList = list.filter(
      (item) =>
        item.title &&
        (query === "" || item.title.toLowerCase().includes(query.toLowerCase()))
    );

    if (categoryFilter !== "") {
      filteredList = filteredList.filter(
        (item) => item.category && item.category.name === categoryFilter
      );
    }

    setFilteredList(sortList(filteredList));
  };

  const sortList = (list) => {
    switch (sortType) {
      case "amountHigh":
        return [...list].sort((a, b) => b.amount - a.amount);
      case "amountLow":
        return [...list].sort((a, b) => a.amount - b.amount);
      case "dateNew":
        return [...list].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "dateOld":
        return [...list].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
      default:
        return list;
    }
  };

  const handleSort = (sortType) => {
    setSortType(sortType);
    setSortOpen(false);
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
    setSortOpen(false);
  };

  const removeFilters = () => {
    setSortType(null);
    setCategoryFilter("");
    setSortOpen(false);
  };

  // useEffect for search
  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(() => {
      handleFilter(list, searchQuery);
    }, 500);
  }, [list, searchQuery, sortType, categoryFilter]);

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
          return expense;
        })
        .filter(
          (expense) => expense.category && expense.category.name === category
        )
        .reduce((sum, current) => sum + current.amount, 0);
    });

    dispatch(handleCategorySums(sums));
  }, [list, dispatch]);

  const notifySuccess = () => toast.success("Expense deleted successfully");

  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />

      {/* Dropdown for sorting */}
      {sortOpen && (
        <div className="sort-container">
          <div className="sort-container-header">
            <div className="sort-header-title">
              <h1>Filters</h1>
              <LottieIcons animationData={FilterLottie} width={50} />
            </div>
            <div className="sort-header-icons">
              <div className="back-layout" onClick={() => setSortOpen(false)}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <div className="back-layout-button">
                    <HiArrowLeftStartOnRectangle />
                    <span>Back</span>
                  </div>
                </Link>
              </div>

              <div className="remove-button" onClick={removeFilters}>
                <div className="remove-icon">
                  <CiBookmarkRemove />
                </div>
                <span>Remove all</span>
              </div>
            </div>
          </div>

          <div className="sort-container-child">
            <h2>Amount</h2>
            <div className="buttons-div">
              <button onClick={() => handleSort("amountHigh")}>
                High to Low
              </button>
              <button onClick={() => handleSort("amountLow")}>
                Low to High
              </button>
            </div>
          </div>

          <div className="sort-container-child">
            <h2>Date</h2>
            <div className="buttons-div">
              <button onClick={() => handleSort("dateNew")}>New to Old</button>
              <button onClick={() => handleSort("dateOld")}>Old to New</button>
            </div>
          </div>

          <div className="sort-container-child">
            <h2>Category</h2>
            <div className="buttons-div">
              <button onClick={() => handleCategoryFilter("Food")}>Food</button>
              <button onClick={() => handleCategoryFilter("Education")}>
                Education
              </button>
              <button onClick={() => handleCategoryFilter("Health")}>
                Health
              </button>
              <button onClick={() => handleCategoryFilter("Entertainment")}>
                Entertainment
              </button>
              <button onClick={() => handleCategoryFilter("Miscellaneous")}>
                Miscellaneous
              </button>
            </div>
          </div>
        </div>
      )}

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
          <LottieIcons animationData={EmptyLottie} width={400} />
          <h3 className="empty-text">No expenses added yet!</h3>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
