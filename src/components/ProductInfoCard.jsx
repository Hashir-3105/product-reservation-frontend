import React from "react";
import { PRODUCT_INFO } from "../constants/product";

function ProductInfoCard({
  title = PRODUCT_INFO.title,
  price = PRODUCT_INFO.price,
  quantity,
  children,
  borderColor = "slate",
}) {
  const borderClasses = {
    slate: "border-slate-200",
    emerald: "border-emerald-200",
  };

  return (
    <div
      className={`rounded-xl bg-white border p-5 flex flex-col gap-4 ${borderClasses[borderColor]}`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
          {quantity !== undefined && (
            <p className="mt-1 text-sm text-slate-600">
              Quantity: <span className="font-semibold text-slate-900">{quantity}</span>
            </p>
          )}
        </div>
        <div className="text-2xl font-extrabold text-blue-600">${price}</div>
      </div>
      {children}
    </div>
  );
}

export default ProductInfoCard;

