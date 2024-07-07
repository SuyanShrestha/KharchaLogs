import moment from "moment";
import React from "react";

import { AiOutlineDelete } from "react-icons/ai";

import "./Card.css";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/actions/expenses";

const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  }

  return (
    <div className="card" style={{ borderRight: "6px solid black" }}>
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
        <div className="delete-icon" onClick={handleDelete}>
          <AiOutlineDelete />
        </div>
      </div>
    </div>
  );
};

export default Card;
