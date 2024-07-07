import React, { useState } from "react";
import "./TopLayout.css";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import { CiCirclePlus } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineSendTimeExtension } from "react-icons/md";

import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { searchExpense } from "../../redux/actions/expenses";

const TopLayout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleQuery = (e) => {
    setSearchQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="top-layout">
      {window.location.pathname === "/" ? (
        <div className="home-layout">
          <div className="searchbar">
            <FaMagnifyingGlass className="glass-icon"/>
            <input
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={handleQuery}
            />
          </div>
          <Link to="/add" style={{textDecoration: 'none'}}>
            <div className="add-button">
              <MdOutlineSendTimeExtension />
              <span> Add</span>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-layout">
          <Link to="/" style={{textDecoration: 'none'}}>
            <div className="add-layout-button">
              <HiArrowLeftStartOnRectangle />
              <span>Back</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopLayout;
