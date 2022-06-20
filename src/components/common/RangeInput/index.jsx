import React, { useContext } from "react";
import { contexts } from "../../../context";
import "./RangeInput.style.scss";

const RangeInput = ({ labelFor, labelName, max, min, step, id }) => {
  const { difficulty, setDifficulty, backgroundSize, setbackgroundSize } =
    useContext(contexts);

  const handleDifficultyChange = (e) => {
    const min = e.target.min;
    const max = e.target.max;
    const value = e.target.value;
    e.target.style.backgroundSize =
      ((value - min) * 100) / (max - min) + "%100";
    switch (value) {
      case "0":
        setDifficulty("easy");
        setbackgroundSize("0%");
        break;
      case "1":
        setDifficulty("medium");
        setbackgroundSize("50%");
        break;
      case "2":
        setDifficulty("hard");
        setbackgroundSize("100%");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <label htmlFor={labelFor}>
        <p>
          {labelName} {difficulty}
        </p>
        <input
          style={{ backgroundSize: `${backgroundSize} 100%` }}
          onChange={(e) => handleDifficultyChange(e)}
          type="range"
          name={labelFor}
          min={min}
          max={max}
          step={step}
          id={id}
        />
      </label>
    </>
  );
};

export default RangeInput;
