import React from "react";
import { useContext } from "react";
import { contexts } from "../../../context";
import "./radioInput.style.scss";

// fix the click issue
const RadioInput = ({ value, text, onClick, answer }) => {
  const { chosenQuestions, counter, selected, darkMode } = useContext(contexts);

  const handleSelect = (chosenAnswer) => {
    const correct = chosenQuestions[counter].correct_answer;
    if (selected === chosenAnswer && selected === correct) return "correct";
    else if (selected === chosenAnswer && selected !== correct)
      return "incorrect";
    else if (chosenAnswer === correct) return "correct";
  };

  return (
    <div className={`radio-input ${darkMode ? "dark" : "light"} `}>
      <button
        className={`option-btn ${
          (selected.length > 0 ? handleSelect(answer) : null,
          darkMode ? "dark" : "light")
        }`}
        disabled={selected}
        onClick={onClick}
        value={value}
      >
        {text}
      </button>
    </div>
  );
};

export default RadioInput;
