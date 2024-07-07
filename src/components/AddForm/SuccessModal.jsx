import React from "react";
import Modal from "react-modal";

import dummyImg from "/favicon.png";
import { GrHomeRounded } from "react-icons/gr";

import { Link } from "react-router-dom";
import "./SuccessModal.css";

import MoneyRain from "../../assets/lottie/MoneyRainLottie.json";
import LottieIcons from "../LottieIcons/LottieIcons";

import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";

// to prevent that screen reader warning
Modal.setAppElement("#root");

const SuccessModal = ({ modalOpen, setModalOpen }) => {
  // styles from docs
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

  // options for lottie animations
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: MoneyRain,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <span>Added successfully!</span>
        {/* <img src={dummyImg} alt="" className="dummyImg"/> */}
        {/* LOTTIE */}
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
