import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Setting from "./components/Setting";
import Analysis from "./components/Analysis";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Setting />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </Router>
  );
};

export default App;
