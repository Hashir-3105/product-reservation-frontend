import { Clock } from "lucide-react";
import Button from "./Button";
import StockRow from "./StockRow";

function ProductInfo({
  title,
  price,
  emoji,
  totalStock,
  reserved,
  available,
  onReserve,
  node = "product",
  isExpired = false,
  remainingMs = 0,
}) {
  const isButtonDisabled =
    available <= 0 || remainingMs > 0 || node !== "product";

  const buttonText =
    available <= 0
      ? "Out of Stock"
      : remainingMs > 0
        ? "Reserved"
        : "Reserve Now";

  const stockData = [
    { label: "Total stock", value: totalStock },
    { label: "Reserved", value: reserved, valueClass: "text-red-600" },
    {
      label: "Available",
      value: available,
      valueClass: available === 0 ? "text-red-600" : "text-emerald-600",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
      <div className="aspect-square rounded-lg bg-linear-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <span className="text-6xl">{emoji}</span>
      </div>

      <div className="mt-5">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h1>
        <p className="mt-1 text-3xl font-extrabold tracking-tight text-blue-600">
          ${price}
        </p>
      </div>

      <div className="mt-5 rounded-xl bg-slate-50 px-5 py-4 flex flex-col gap-2">
        {" "}
        {stockData.map(({ label, value, valueClass }) => (
          <StockRow
            key={label}
            label={label}
            value={value}
            valueClass={valueClass}
          />
        ))}
      </div>

      {isExpired && (
        <div className="text-sm rounded-lg border border-red-200 bg-red-50 p-3 flex items-center gap-2 text-red-600 mt-3">
          <Clock size={18} />
          <span>Your reservation has expired. Item returned to stock.</span>
        </div>
      )}

      {node === "product" && (
        <Button
          onClick={onReserve}
          disabled={isButtonDisabled}
          className={`mt-5 w-full py-3 text-sm font-semibold text-white shadow-sm transition ${
            available <= 0
              ? "bg-[#808088] cursor-not-allowed"
              : remainingMs > 0
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-black hover:bg-gray-800"
          }`}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
}

export default ProductInfo;
