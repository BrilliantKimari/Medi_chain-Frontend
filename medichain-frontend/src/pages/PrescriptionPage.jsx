import { Pill, Calendar, User, Plus, Edit, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrescriptionPage() {
  // Placeholder data (you’ll later replace this with API data)
  const prescriptions = [
    {
      id: 1,
      medication: "Amoxicillin",
      dosage: "500mg",
      frequency: "3 times a day",
      duration: "7 days",
      prescribedBy: "Dr. Kamau",
      date: "2024-10-01",
      notes: "Take with food to avoid stomach upset."
    },
    {
      id: 2,
      medication: "Ibuprofen",
      dosage: "200mg",
      frequency: "As needed",
      duration: "10 days",
      prescribedBy: "Dr. Njeri",
      date: "2024-09-15",
      notes: "For pain relief, not to exceed 4 tablets per day."
    },
    {
      id: 3,
      medication: "Metformin",
      dosage: "500mg",
      frequency: "Twice a day",
      duration: "Ongoing",
      prescribedBy: "Dr. Patel",
      date: "2024-08-20",
      notes: "Monitor blood sugar levels regularly."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Pill className="text-green-600" size={36} />
            <h1 className="text-3xl font-bold text-gray-800">Patient Prescriptions</h1>
          </div>
          <button
            onClick={() => alert("Add Prescription functionality coming soon!")}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 flex items-center gap-2"
          >
            <Plus size={18} />
            Add Prescription
          </button>
        </div>

        {/* Prescriptions List */}
        <div className="space-y-6">
          {prescriptions.map((prescription) => (
            <div key={prescription.id} className="bg-gray-100 p-6 rounded-xl border border-gray-200 relative">
              <button
                onClick={() => alert(`Edit prescription for ${prescription.medication} coming soon!`)}
                className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 flex items-center gap-1 text-sm"
              >
                <Edit size={14} />
                Edit
              </button>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{prescription.medication}</h2>
                  <p className="text-gray-700"><strong>Dosage:</strong> {prescription.dosage}</p>
                  <p className="text-gray-700"><strong>Frequency:</strong> {prescription.frequency}</p>
                  <p className="text-gray-700"><strong>Duration:</strong> {prescription.duration}</p>
                </div>
                <div>
                  <p className="text-gray-700 flex items-center gap-2">
                    <User size={18} className="text-blue-500" />
                    <strong>Prescribed by:</strong> {prescription.prescribedBy}
                  </p>
                  <p className="text-gray-700 flex items-center gap-2">
                    <Calendar size={18} className="text-green-500" />
                    <strong>Date:</strong> {prescription.date}
                  </p>
                  <p className="text-gray-700 mt-2"><strong>Notes:</strong> {prescription.notes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {prescriptions.length === 0 && (
          <p className="text-gray-500 italic text-center">No prescriptions available.</p>
        )}

        {/* Back Button */}
        <div className="text-center mt-8">
          <Link
            to="/patient-dashboard"
            className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
