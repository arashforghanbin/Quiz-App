import React from "react";
import { useContext } from "react";
import { contexts } from "../../../context";
import "./startbutton.style.scss";

const StartButton = ({ type, buttonName }) => {
  const { darkMode } = useContext(contexts);
  return (
    <>
      <button
        className={`ordinary-btn ${darkMode ? "dark" : "light"}`}
        type={type}
      >
        {buttonName}
      </button>
    </>
  );
};

export default StartButton;
