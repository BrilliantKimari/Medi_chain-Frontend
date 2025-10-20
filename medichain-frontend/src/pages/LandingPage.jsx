import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleEnter = (role) => {
    // navigate to role-specific routes
    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Welcome to MediChain</h1>
      <p className="mb-8 text-lg text-gray-600">Choose your role to continue:</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => handleEnter("patient")}
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
        >
          Enter as Patient
        </button>
        <button
          onClick={() => handleEnter("officer")}
          className="px-6 py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition"
        >
          Enter as Medical Officer
        </button>
        <button
          onClick={() => handleEnter("caregiver")}
          className="px-6 py-3 bg-purple-500 text-white rounded-xl shadow hover:bg-purple-600 transition"
        >
          Enter as Caregiver
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
