import React from "react";

function Navbar() {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between">
      <h2 className="font-bold text-lg">Dashboard</h2>
      <button className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
    </div>
  );
}

export default Navbar;
