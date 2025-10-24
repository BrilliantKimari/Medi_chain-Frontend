import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MedicLandingPage from "./pages/MedicLandingPage";
import PatientPage from "./pages/PatientPage";
import OfficerPage from "./pages/OfficerPage";
import CaregiverPage from "./pages/CaregiverPage";
import MedicRegisterPage from "./pages/MedicRegisterPage";
import MedicDashboardPage from "./pages/MedicDashboardPage";
import MedicLoginPage from "./pages/MedicLoginPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/medic" element={<MedicLandingPage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/officer" element={<OfficerPage />} />
        <Route path="/caregiver" element={<CaregiverPage />} />
        <Route path="/medic-register" element={<MedicRegisterPage />} />
        <Route path="medic-dashboard" element={<MedicDashboardPage />} />
        <Route path="medic-login" element={<MedicLoginPage />} />
      </Routes>
    </Router>
  );
}
