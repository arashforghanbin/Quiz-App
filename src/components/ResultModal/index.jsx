import React from "react";
import { useContext } from "react";
import { contexts } from "../../context";
import { IoHome } from "react-icons/io5";
import "./resultmodal.style.scss";
import { useNavigate } from "react-router-dom";

const ResultModal = () => {
  const {
    questionQuantity,
    score,
    isActive,
    setIsActive,
    setSelected,
    setCounter,
    setScore,
  } = useContext(contexts);
  const result = ((score / questionQuantity) * 100).toFixed(1);
  const navigate = useNavigate();
  const handleQuit = () => {
    setIsActive(false);
    setSelected("");
    setCounter(0);
    setScore(0);
    navigate("/");
  };

  const handleResultMessage = (result) => {
    if (result > 50) {
      return (
        <>
          <h2 className="modal__title">Nice Job!</h2>
          <h3 className="modal__result">
            You answered <span className="awful">{result}%</span> correctly!
          </h3>
        </>
      );
    } else {
      return (
        <>
          <h2 className="modal__title">Try Again!</h2>
          <h3 className="modal__result">
            You answered <span className="nice">{result}%</span> correctly!
          </h3>
        </>
      );
    }
  };

  return (
    <>
      <canvas
        className="canvas"
        height="100vh"
        width="100%"
        id="my-canvas"
      ></canvas>
      <section className={`modal ${isActive ? "active" : ""}`}>
        {handleResultMessage(result)}
        <button onClick={handleQuit} className="modal--btn">
          <IoHome className="modal--btn__icon" />
        </button>
      </section>
      <div id="overlay" className={`${isActive ? "active" : ""}`}></div>
    </>
  );
};

export default ResultModal;
