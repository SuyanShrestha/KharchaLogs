import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "./EditForm.css";

import { FaChevronDown } from "react-icons/fa";
import { MdOutlineSendTimeExtension } from "react-icons/md";

import { categories } from "../../constants/add-expense";
import { handleEdit } from "../../redux/actions/expenses";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SuccessModal from "../AddForm/SuccessModal";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";

const EditForm = () => {
  const dispatch = useDispatch();
  const expense = JSON.parse(localStorage.getItem("editExpense"));

  const [title, setTitle] = useState(expense ? expense.title : "");
  const [amount, setAmount] = useState(expense ? expense.amount : "");
  const [category, setCategory] = useState(expense ? expense.category : "");
  const [modalOpen, setModalOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const categoryList = categories;

  useEffect(() => {
    if (expense) {
      setTitle(expense.title);
      setAmount(expense.amount);
      setCategory(expense.category);
    }
  }, []);

  const onEdit = (updatedExpense) => {
    dispatch(handleEdit(updatedExpense));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && amount && category) {
      const updatedExpense = {
        ...expense,
        title,
        amount,
        category,
      };
      onEdit(updatedExpense);
      setModalOpen(true);
    } else {
      toast.error("Please fill in all fields");
    }
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
    } else {
      setAmount(val);
    }
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />

      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <div className="form-item">
        <span>Title</span>
        <input
          type="text"
          placeholder="Enter the name"
          value={title}
          onChange={handleTitle}
        />
      </div>

      <div className="form-item">
        <span>Amount</span>
        <input
          placeholder="Enter the amount"
          value={amount}
          onChange={handleAmount}
          className="amount-input"
        />
      </div>

      {/* category */}
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <span>{category ? category.name : "Category"}</span>
            <FaChevronDown />
          </div>

          {/* open dropdown */}
          {categoryOpen && (
            <div className="category-container">
              {categoryList.map((category) => (
                <div
                  key={category.id}
                  className="category-item"
                  onClick={() => handleCategory(category)}
                >
                  <img src={category.icon} alt={category.name} />
                  <span>{category.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Save button */}
      <div className="buttons-div">
        <Link
          to="/"
          className="form-cancel-button"
          style={{ textDecoration: "none" }}
        >
          <div>
            <HiArrowLeftStartOnRectangle className="cancel-icon" />
            <span>Cancel</span>
          </div>
        </Link>
        <button type="submit" className="form-save-button">
          <div>
            <span>Save</span>
            <MdOutlineSendTimeExtension className="save-icon" />
          </div>
        </button>
      </div>
    </form>
  );
};

export default EditForm;
