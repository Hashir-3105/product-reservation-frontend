import React from "react";

function InfoBox({ title, children }) {
  return (
    <div className="text-xs text-gray-500 bg-white p-3 rounded border border-gray-200">
      <p className="font-semibold mb-1">{title}</p>
      <p>{children}</p>
    </div>
  );
}

export default InfoBox;
