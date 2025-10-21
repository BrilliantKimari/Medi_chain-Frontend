import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PatientPage from "./pages/PatientPage";
import OfficerPage from "./pages/OfficerPage";
import CaregiverPage from "./pages/CaregiverPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/officer" element={<OfficerPage />} />
        <Route path="/caregiver" element={<CaregiverPage />} />
      </Routes>
    </Router>
  );
}

export default App;
