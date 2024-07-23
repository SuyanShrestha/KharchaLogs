import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./AddForm.css";

import { FaChevronDown } from "react-icons/fa";
import { MdOutlineSendTimeExtension } from "react-icons/md";

import { categories } from "../../constants/add-expense";
import { addExpense } from "../../redux/actions/expenses";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SuccessModal from "./SuccessModal";

const AddForm = () => {
  const categoryList = categories;

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    } else {
      setAmount(val);
    }
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };

  const handleSubmit = () => {
    if (!title || !amount || !category) {
      const notify = () => toast("Please fill all the fields");
      notify();
      return;
    }
    const data = { title, amount, category, createdAt: new Date() };
    dispatch(addExpense(data));
    setModalOpen(true);
  };

  return (
    <div className="add-form">
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

      {/* Add expense button */}
      <div className="form-add-button" onClick={handleSubmit}>
        <div>
          <span>Add</span>
          <MdOutlineSendTimeExtension className="add-icon" />
        </div>
      </div>
    </div>
  );
};

export default AddForm;
