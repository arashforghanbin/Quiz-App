import React, { useContext } from "react";
import { contexts } from "../../context";

function DarkModeSwitch() {
  const { darkMode, setDarkMode } = useContext(contexts);
  console.log(darkMode);
  return (
    <button onClick={() => (darkMode ? setDarkMode(false) : setDarkMode(true))}>
      DarkModeSwitch
    </button>
  );
}

export default DarkModeSwitch;
