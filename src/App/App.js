import React from "react";
import Setup from "../Pages/setup";
import { Routes, Route } from "react-router-dom";
import Questions from "../Pages/questions";

function App() {
  return (
    <>
      <Routes>
        <Route path="/setup" element={<Setup />} />
        <Route path="/" element={<Setup />} />
        <Route path="/questions" element={<Questions />} />
      </Routes>
    </>
  );
}

export default App;
