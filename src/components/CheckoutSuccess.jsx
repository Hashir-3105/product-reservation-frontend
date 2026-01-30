import { RotateCcw, ShoppingBag } from "lucide-react";
import InfoBox from "./InfoBox";
import Confirmed from "../assets/Icons/Confirmed";
import PanelCard from "./PanelCard";
import { PRODUCT_INFO } from "../constants/product";

function CheckoutSuccess({ onContinue }) {
  return (
    <>
      <PanelCard variant="emerald">
        <div className="mx-auto flex p-4 items-center justify-center rounded-full bg-green-100">
          <Confirmed
            className={
              "lucide lucide-circle-check-big w-20 h-20 text-green-600"
            }
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-emerald-900">
            Purchase completed!
          </h2>
          <p className="mt-1 text-sm text-emerald-800">
            Your order has been successfully placed.
          </p>
        </div>
        <div className="rounded-xl bg-white border border-emerald-200 p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 font-semibold text-emerald-900">
            <span className="h-5 w-5 rounded-md bg-emerald-100 flex items-center justify-center">
              <ShoppingBag />
            </span>
            Order Summary
          </div>

          <div className="flex justify-between text-sm text-slate-700">
            <span>{PRODUCT_INFO.title}</span>
            <span className="font-semibold">${PRODUCT_INFO.price}</span>
          </div>

          <div className="border-t border-gray-200 pt-3 flex justify-between text-base font-extrabold text-emerald-700">
            <span>Total</span>
            <span>${PRODUCT_INFO.price}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-lg border border-slate-200 bg-white py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition flex items-center justify-center gap-2"
        >
          <span>
            <RotateCcw size={16} />
          </span>
          Continue Shopping
        </button>
      </PanelCard>
      <InfoBox title={"Cart Cleared:"}>
        Reservation converted to purchase. Timer stopped and cart emptied.
      </InfoBox>
    </>
  );
}

export default CheckoutSuccess;
