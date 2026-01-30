import React from "react";

function Footer({ footerStateLabel, availableCount, reservedCount }) {
  return (
    <footer className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-slate-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm">
        <div className="text-slate-800">
          <span className="font-semibold">Current State:</span>{" "}
          <span className="capitalize">{footerStateLabel}</span>
        </div>
        <div className="flex items-center gap-6 text-slate-900">
          <div>
            <span className="font-semibold">Available:</span> {availableCount}
          </div>
          <div>
            <span className="font-semibold">Reserved:</span> {reservedCount}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
