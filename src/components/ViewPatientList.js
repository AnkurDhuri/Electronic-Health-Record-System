import React from "react";
import NavBar_Logout from "./NavBar_Logout";

function ViewPatientList() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-mono">
      <NavBar_Logout />

      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-6">Secure Electronic Health Records</h1>
        <h2 className="text-3xl font-semibold">Patient's List</h2>
      </div>

      <div className="max-w-5xl mx-auto mt-10 p-4 border border-gray-400 rounded-md">
        <div className="flex justify-between items-center p-4">
          <div>
            <p className="text-yellow-400 text-lg">
              <span className="font-bold">Patient :</span> 
            </p>
            <p className="text-lg mt-1">
              <span className="text-yellow-400 font-bold">Name :</span> 
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-teal-500 px-6 py-2 rounded hover:bg-teal-600 transition">
              View
            </button>
            <button className="bg-teal-500 px-6 py-2 rounded hover:bg-teal-600 transition">
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="bg-teal-500 px-10 py-3 rounded hover:bg-teal-600 transition">
          Back
        </button>
      </div>
    </div>
  );
}

export default ViewPatientList;
