// src/pages/CaregiverDashboard.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText, CalendarDays, Heart, Stethoscope, Pill } from "lucide-react";

const healthTips = [
  "Check patient prescriptions daily for accuracy.",
  "Ensure patients attend scheduled appointments.",
  "Monitor patient adherence to medication plans.",
  "Encourage patients to maintain healthy lifestyles.",
  "Keep communication open with patients and families.",
];

export default function CaregiverDashboard() {
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prevTip) => (prevTip + 1) % healthTips.length);
    }, 10000); // Change tip every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center space-x-4">
          <Stethoscope className="text-white" size={32} />
          <h1 className="text-2xl font-bold text-white">Caregiver Dashboard</h1>
        </div>
        <div className="flex space-x-6">
          <Link to="/caregiver-login" className="text-red-300 hover:text-red-100 font-medium">
            Logout
          </Link>
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="text-center my-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome, Caregiver!</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Manage patient prescriptions and appointments efficiently.
        </p>
      </div>

      {/* Main Actions */}
      <div className="grid gap-8 md:grid-cols-2 w-full max-w-6xl mx-auto mb-12">
        {/* Prescriptions */}
        <Link
          to="/prescriptions"
          className="group flex flex-col items-center bg-gradient-to-br from-green-500 to-green-600 p-10 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-white"
        >
          <Pill size={56} className="mb-4 group-hover:animate-pulse" />
          <h3 className="text-2xl font-bold mb-3">Prescriptions</h3>
          <p className="text-center opacity-90">
            View and manage patient medications, dosages, and refill schedules.
          </p>
        </Link>

        {/* Appointments */}
        <Link
          to="/appointments"
          className="group flex flex-col items-center bg-gradient-to-br from-blue-500 to-blue-600 p-10 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-white"
        >
          <CalendarDays size={56} className="mb-4 group-hover:animate-pulse" />
          <h3 className="text-2xl font-bold mb-3">Appointments</h3>
          <p className="text-center opacity-90">
            Track and manage patient appointments and upcoming visits.
          </p>
        </Link>
      </div>

      {/* Health Tip */}
      <div className="w-full max-w-4xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-xl border-l-4 border-yellow-500">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">💡 Caregiver Tip of the Day</h4>
          <p className="text-gray-700">{healthTips[currentTip]}</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center text-blue-100 text-sm">
          © 2025 MediChain. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
