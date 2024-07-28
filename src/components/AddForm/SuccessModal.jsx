import React from "react";
import Modal from "react-modal";

import { Link } from "react-router-dom";
import "./SuccessModal.css";

import MoneyRain from "../../assets/lottie/MoneyRainLottie.json";
import LottieIcons from "../LottieIcons/LottieIcons";

import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";

// to prevent that screen reader warning
Modal.setAppElement("#root");

const SuccessModal = ({ modalOpen, setModalOpen }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "1rem",
    },
  };

  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <span>Added successfully!</span>
        <LottieIcons animationData={MoneyRain} width={400} />

        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="take-home-button">
            <HiArrowLeftStartOnRectangle />
            <span>Back</span>
          </div>
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
