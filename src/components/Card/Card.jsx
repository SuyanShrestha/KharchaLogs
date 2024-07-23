import moment from "moment";
import React from "react";

import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

import "./Card.css";
import { useDispatch } from "react-redux";
import { deleteExpense, handleEdit } from "../../redux/actions/expenses";
import { Link } from "react-router-dom";

const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  };

  const storeEditLocal = (item) => {
    localStorage.setItem("editExpense", JSON.stringify(item));
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img
          src={item.category.icon}
          alt={item.category.name}
          className="card-image"
        />
      </div>
      <div className="card-info">
        <h2 className="card-title">{item.title}</h2>
        <p className="card-time">{time}</p>
      </div>

      <div className="card-right">
        <div>
          <p className="card-amount">Rs. {item.amount}</p>
        </div>
        <div className="side-buttons-div">
          <Link
            to="/edit"
            className="edit-icon"
            onClick={() => storeEditLocal(item)}
          >
            <CiEdit className="edit-button" />
          </Link>

          <div className="delete-icon" onClick={handleDelete}>
            <AiOutlineDelete className="delete-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
