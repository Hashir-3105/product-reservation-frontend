import React from "react";

function PanelCard({ children, variant = "green" }) {
  const variantClasses = {
    green: "border-green-200 bg-linear-to-br from-green-50 to-blue-50",
    emerald: "border-emerald-200 bg-linear-to-br from-emerald-50 to-green-50",
  };

  return (
    <div
      className={`rounded-xl border p-6 flex flex-col gap-4 ${variantClasses[variant]}`}
    >
      {children}
    </div>
  );
}

export default PanelCard;

