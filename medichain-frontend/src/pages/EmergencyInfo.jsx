import { useState } from "react";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function EmergencyInfo() {
  const [info, setInfo] = useState({
    patientName: "",
    age: "",
    bloodGroup: "",
    allergy: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyInstructions: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const id = `patient-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const emergencyInfo = { id, ...info };

    localStorage.setItem(`emergencyInfo-${id}`, JSON.stringify(emergencyInfo));

    alert("Emergency information saved successfully!");
    navigate(`/emergency-info/${id}`);
  };

  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center mb-6">
          <AlertTriangle className="text-red-600 mr-3" size={32} />
          <h1 className="text-2xl font-bold text-red-700">
            Emergency Information
          </h1>
        </div>

        {/* Patient Info */}
        <div className="space-y-4 mb-6">
          {["patientName", "age", "bloodGroup", "allergy"].map((field) => (
            <div key={field}>
              <label className="block text-gray-700 mb-1 capitalize">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type={field === "age" ? "number" : "text"}
                name={field}
                value={info[field]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder={
                  field === "patientName"
                    ? "John Doe"
                    : field === "bloodGroup"
                    ? "O+"
                    : field === "allergy"
                    ? "Penicillin"
                    : ""
                }
              />
            </div>
          ))}

          {/* Emergency Contact */}
          <div className="border border-red-200 bg-red-50 rounded-lg p-4 mt-4">
            <h2 className="text-lg font-semibold text-red-700 mb-2">
              Emergency Contact Details
            </h2>
            <div className="mb-3">
              <label className="block text-gray-700 mb-1">Contact Name</label>
              <input
                type="text"
                name="emergencyContactName"
                value={info.emergencyContactName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Contact Phone</label>
              <input
                type="tel"
                name="emergencyContactPhone"
                value={info.emergencyContactPhone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="+254 712 345 678"
              />
            </div>
          </div>
        </div>

        {/* Emergency Instructions */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">
            Emergency Instructions
          </label>
          <textarea
            name="emergencyInstructions"
            rows="4"
            value={info.emergencyInstructions}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Describe how to assist the patient in an emergency..."
          ></textarea>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
        >
          Save Emergency Info
        </button>

        <div className="text-center mt-6">
          <Link
            to="/patient-dashboard"
            className="inline-flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={18} className="mr-2" /> Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
