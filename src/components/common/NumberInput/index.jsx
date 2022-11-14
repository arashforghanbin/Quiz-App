import React, { useContext } from "react";
import { contexts } from "../../../context";
import "./input.style.scss";

const NumberInput = ({ lableFor, lableName, id }) => {
  const { setQuestionQuantity, questionQuantity, darkMode } =
    useContext(contexts);

  const handleNumberInputChange = (e) => {
    const entry = e.target.value;
    // change the order
    if (entry > 0) {
      setQuestionQuantity(entry);
    } else if (entry === "0" || entry < 0) {
      console.log("Need to be at least 1 question");
    } else if (entry > 50) {
      console.log("Needs to be 50 questions max");
    }
  };

  return (
    <>
      <label htmlFor={lableFor}>
        <p>{lableName}</p>
        <input
          value={questionQuantity}
          onChange={(e) => handleNumberInputChange(e)}
          className={`number-input ${darkMode ? "dark" : "light"} `}
          name={lableFor}
          type="number"
          id={id}
          max="50"
          min="1"
        />
      </label>
    </>
  );
};

export default NumberInput;
