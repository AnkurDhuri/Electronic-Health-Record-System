import React from "react";
import NavBar_Logout from "./NavBar_Logout";

function ViewPatientRecords() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white font-mono">
      <NavBar_Logout />
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">Record Viewer</h1>
      </div>
    </div>
  );
}

export default ViewPatientRecords;
