import React from "react";
import Modal from "react-modal";

import dummyImg from "/favicon.png";
import { GrHomeRounded } from "react-icons/gr";

import { Link } from "react-router-dom";
import "./SuccessModal.css";

// to prevent that screen reader warning
Modal.setAppElement('#root'); 

const SuccessModal = ({modalOpen, setModalOpen}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    //   backgroundColor: "skyblue",
      borderRadius: "1rem",
    },
  };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <span>Added successfully!</span>
        <img src={dummyImg} alt="" className="dummyImg"/>

        <Link to="/">
            <div className="take-home-button">
              <GrHomeRounded className="home-icon"/>
              <span>Home</span>
            </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
