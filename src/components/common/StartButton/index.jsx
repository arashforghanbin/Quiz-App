import React from "react";
import "./startbutton.style.scss";

const StartButton = ({ type, buttonName }) => {
  return (
    <>
      <button className="ordinary-btn" type={type}>{buttonName}</button>
    </>
  );
};

export default StartButton;
