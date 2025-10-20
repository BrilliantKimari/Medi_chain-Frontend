import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* You can later add these pages */}
        <Route path="/patient" element={<h2>Patient Dashboard</h2>} />
        <Route path="/officer" element={<h2>Medical Officer Dashboard</h2>} />
        <Route path="/caregiver" element={<h2>Caregiver Dashboard</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

