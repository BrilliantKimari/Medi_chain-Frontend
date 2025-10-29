import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AlertTriangle, LogIn, Share2 } from "lucide-react";
import QRCode from "react-qr-code";

export default function EmergencyInfoLandingPage() {
  const { patientId } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (patientId) {
      const saved = localStorage.getItem(`emergencyInfo-${patientId}`);
      if (saved) setInfo(JSON.parse(saved));
    }
  }, [patientId]);

  if (!info) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-700">No emergency info found for this patient.</p>
      </div>
    );
  }

  const qrLink = `${window.location.origin}/emergency-info/${info.id}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(qrLink);
    alert("Emergency info link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex items-center mb-6">
          <AlertTriangle className="text-red-600 mr-3" size={32} />
          <h1 className="text-2xl font-bold text-red-700">
            Emergency Information
          </h1>
        </div>

        {/* Patient Info */}
        <div className="space-y-3 mb-8">
          <p><strong>Name:</strong> {info.patientName}</p>
          <p><strong>Age:</strong> {info.age}</p>
          <p><strong>Blood Group:</strong> {info.bloodGroup}</p>
          <p><strong>Allergies:</strong> {info.allergy}</p>
          <p><strong>Emergency Contact:</strong> {info.emergencyContactName}</p>
          <p><strong>Contact Phone:</strong> {info.emergencyContactPhone}</p>
          <p><strong>Instructions:</strong> {info.emergencyInstructions}</p>
        </div>

        {/* QR Section */}
        <div className="flex flex-col items-center mb-6">
          <p className="text-gray-700 mb-2">Scan QR to access this page:</p>
          <div className="bg-white p-3 rounded-lg shadow">
            <QRCode value={qrLink} size={128} />
          </div>
          <p className="text-xs text-gray-500 mt-2">{qrLink}</p>
        </div>

        {/* Copy Link Button */}
        <div className="flex flex-col gap-3 mb-6">
          <button
            onClick={handleCopyLink}
            className="flex items-center justify-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            <Share2 size={18} className="mr-2" /> Copy QR Link
          </button>
        </div>

        {/* Login Button */}
        <Link
          to="/login"
          className="flex items-center justify-center bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
        >
          <LogIn size={18} className="mr-2" /> Login
        </Link>
      </div>
    </div>
  );
}
