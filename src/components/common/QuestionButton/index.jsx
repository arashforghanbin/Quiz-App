import React, { useContext } from "react";
import { contexts } from "../../../context";
import "./questionsbutton.style.scss";
import ConfettiGenerator from "confetti-js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuestionButton = ({ type, buttonName }) => {
  const {
    counter,
    setCounter,
    setSelected,
    questionQuantity,
    selected,
    setIsActive,
    darkMode,
  } = useContext(contexts);

  const confettiSettings = {
    target: "my-canvas",
    props: ["square"],
    size: 1.5,
    max: 120,
  };

  const handleNext = () => {
    if (counter > questionQuantity - 2) {
      setIsActive(true);
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
    } else if (selected) {
      setCounter(counter + 1);
      setSelected("");
    } else {
      toast.warn("Please Choose an Answer!😐");
    }
  };

  return (
    <>
      <button
        className={`ordinary-btn ${darkMode ? "dark" : "light"}`}
        onClick={handleNext}
        type={type}
      >
        {buttonName}
      </button>
    </>
  );
};

export default QuestionButton;
