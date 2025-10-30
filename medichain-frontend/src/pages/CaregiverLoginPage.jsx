// src/pages/CaregiverLoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stethoscope } from "lucide-react";

export default function CaregiverLoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    // For demo purposes, we’ll accept any username/password
    // In a real app, you would verify credentials with backend
    navigate("/caregiver-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col justify-center items-center">
      {/* Header */}
      <div className="flex items-center mb-12">
        <Stethoscope className="text-blue-600 mr-3" size={40} />
        <h1 className="text-3xl font-bold text-gray-800">Caregiver Login</h1>
      </div>

      {/* Login Form */}
      <form 
        onSubmit={handleLogin} 
        className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-4"
      >
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors mt-2"
        >
          Login
        </button>
      </form>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        © 2025 MediChain. All rights reserved.
      </footer>
    </div>
  );
}
