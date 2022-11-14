import React, { useContext } from "react";
import Setup from "../Pages/setup";
import { Routes, Route } from "react-router-dom";
import Questions from "../Pages/questions";
import "../assets/style/index.scss";
import { contexts } from "../context";

function App() {
  const { darkMode } = useContext(contexts);
  return (
    <div className={darkMode ? "app_dark" : "app_light"}>
      <Routes>
        <Route path="/setup" element={<Setup />} />
        <Route path="/" element={<Setup />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </div>
  );
}

export default App;
