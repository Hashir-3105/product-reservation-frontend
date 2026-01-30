import { Clock5, ShoppingCart, AlertTriangle } from "lucide-react";
import React from "react";
import InfoBox from "./InfoBox";

function CartPanel({ remainingMs, onCancel, onCheckout, formatMs }) {
  return (
    <>
      <div className="rounded-xl border border-slate-200 bg-linear-to-br from-green-50 to-blue-50 p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <span>
            <ShoppingCart />
          </span>
          <span>Your Cart</span>
        </div>

        <div className="rounded-xl bg-white border border-slate-200 p-5 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Wireless Headphones
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Quantity:{" "}
                <span className="font-semibold text-slate-900">1</span>
              </p>
            </div>

            <div className="text-2xl font-extrabold text-blue-600">$99</div>
          </div>

          <div className="rounded-xl border border-orange-200 bg-orange-50 px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-orange-700 font-semibold">
              <span>
                <Clock5 size={20} />
              </span>
              <span>Time left:</span>
            </div>

            <div className="text-2xl font-extrabold text-orange-600">
              {formatMs(remainingMs)}
            </div>
          </div>
          {remainingMs <= 30000 && remainingMs > 0 && (
            <div className="text-xs text-red-600 bg-red-50 p-3 rounded-lg border border-red-200 flex items-center gap-2">
              <span>
                <AlertTriangle size={18} />
              </span>
              <span>Hurry! Your reservation is about to expire!</span>
            </div>
          )}
          <button
            type="button"
            onClick={onCancel}
            className="w-full rounded-lg border border-red-300 bg-red-50 py-2 text-sm font-semibold text-red-600 hover:bg-red-100 transition flex items-center justify-center gap-2"
          >
            <span>✕</span>
            Cancel Reservation
          </button>
        </div>

        <button
          type="button"
          onClick={onCheckout}
          className="w-full rounded-lg bg-green-600 py-2 text-base font-semibold text-white shadow-sm hover:bg-green-700 transition"
        >
          Complete Checkout
        </button>
      </div>
      <InfoBox title={"Timer Active:"}>
        Complete checkout before timer expires or item will be returned to
        stock.
      </InfoBox>
    </>
  );
}

export default CartPanel;
