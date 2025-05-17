import React, { useState } from "react";
import NavBar_Logout from "./NavBar_Logout";

function DiagnosticForm() {
  const [formData, setFormData] = useState({
    doctorName: "",
    patientName: "",
    age: "",
    gender: "",
    bloodGroup: "",
    patientWallet: "",
    diagnosticWallet: "",
    reportFile: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-mono">
      <NavBar_Logout />
      <div className="flex justify-center items-center py-10">
        <div className="bg-gray-800 p-8 rounded-xl w-full max-w-3xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Create Lab Report</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label>Record Id :</label>
              <p className="text-pink-300 font-bold"></p>
            </div>

            <div>
              <label>Doctor Name:</label>
              <input
                type="text"
                name="doctorName"
                value={formData.doctorName}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded bg-gray-700 text-white"
              />
            </div>

            <div>
              <label>Patient Name:</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded bg-gray-700 text-white"
              />
            </div>

            <div>
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded bg-gray-700 text-white"
              />
            </div>

            <div>
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded bg-gray-700 text-white"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label>Blood Group</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded bg-gray-700 text-white"
              >
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>

            <div>
              <label>Patient Wallet Address:</label>
              <input
                type="text"
                name="patientWallet"
                value={formData.patientWallet}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded bg-gray-700 text-white"
              />
            </div>

            <div>
              <label>Diagnostic Wallet Address:</label>
              <input
                type="text"
                name="diagnosticWallet"
                value={formData.diagnosticWallet}
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded bg-gray-700 text-white"
              />
            </div>

            <div className="md:col-span-2">
              <label>Upload Final Report</label>
              <input
                type="file"
                name="reportFile"
                onChange={handleChange}
                className="mt-1 p-2 w-full rounded bg-gray-700 text-white"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-teal-500 hover:bg-teal-600 px-6 py-2 rounded font-bold">
              Create Record
            </button>
            <button className="bg-gray-500 px-6 py-2 rounded font-bold">
              Upload Report
            </button>
            <button className="bg-teal-700 hover:bg-teal-800 px-6 py-2 rounded font-bold">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiagnosticForm;
