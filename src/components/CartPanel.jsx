import { Clock5, ShoppingCart, AlertTriangle } from "lucide-react";
import React from "react";
import InfoBox from "./InfoBox";
import PanelCard from "./PanelCard";
import ProductInfoCard from "./ProductInfoCard";

function CartPanel({ remainingMs, onCancel, onCheckout, formatMs }) {
  return (
    <>
      <PanelCard variant="green">
        <div className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <span>
            <ShoppingCart />
          </span>
          <span>Your Cart</span>
        </div>

        <ProductInfoCard quantity={1}>
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
        </ProductInfoCard>

        <button
          type="button"
          onClick={onCheckout}
          className="w-full rounded-lg bg-green-600 py-2 text-base font-semibold text-white shadow-sm hover:bg-green-700 transition"
        >
          Complete Checkout
        </button>
      </PanelCard>
      <InfoBox title={"Timer Active:"}>
        Complete checkout before timer expires or item will be returned to
        stock.
      </InfoBox>
    </>
  );
}

export default CartPanel;
