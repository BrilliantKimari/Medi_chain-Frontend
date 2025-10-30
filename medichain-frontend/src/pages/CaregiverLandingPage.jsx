// src/pages/CaregiverLandingPage.jsx
import { useNavigate } from "react-router-dom";
import { Stethoscope, Pill, CalendarDays } from "lucide-react";

export default function CaregiverLandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col justify-center items-center px-6">
      {/* Header */}
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome, Caregiver!</h1>
        <p className="text-lg text-gray-700 mb-4">
          As a caregiver, you play a vital role in helping patients maintain their health. 
          Your responsibilities include ensuring they take their medications on time, 
          managing their appointments, and providing support in their daily health routines.
        </p>
        <p className="text-lg text-gray-700">
          By staying organized and attentive, you help patients achieve better health outcomes 
          and make it easier for them to follow their care plans. Your role is essential in 
          creating a safe and healthy environment for those you care for.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl w-full mb-12">
        <div className="flex flex-col items-center bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl shadow-lg text-white">
          <Pill size={56} className="mb-4" />
          <h3 className="text-2xl font-bold mb-2">Medication Management</h3>
          <p className="text-center opacity-90">
            Keep track of medications, dosages, and schedules. Ensure patients take their prescriptions 
            correctly to maintain optimal health and prevent complications.
          </p>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl shadow-lg text-white">
          <CalendarDays size={56} className="mb-4" />
          <h3 className="text-2xl font-bold mb-2">Appointments</h3>
          <p className="text-center opacity-90">
            Schedule and manage patient appointments efficiently. Help patients stay on top of their 
            healthcare timeline and follow-up visits.
          </p>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl shadow-lg text-white md:col-span-2">
          <Stethoscope size={56} className="mb-4" />
          <h3 className="text-2xl font-bold mb-2">Patient Support</h3>
          <p className="text-center opacity-90">
            Offer guidance, encouragement, and assistance to patients in their daily health routines. 
            Your support can improve adherence to care plans and overall well-being.
          </p>
        </div>
      </div>

      {/* Get Started Button */}
      <button
        onClick={() => navigate("/caregiver-login")}
        className="bg-blue-600 text-white px-10 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </button>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        © 2025 MediChain. All rights reserved.
      </footer>
    </div>
  );
}
