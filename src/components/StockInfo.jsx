import StockRow from "./StockRow";

function StockInfo({ totalStock, reserved, available }) {
  return (
    <div className="mt-5 rounded-xl bg-slate-50 px-5 py-4 flex flex-col gap-2">
      <StockRow label="Total stock" value={totalStock} />
      <StockRow label="Reserved" value={reserved} valueClass="text-red-600" />
      <StockRow
        label="Available"
        value={available}
        valueClass="text-emerald-600"
      />
    </div>
  );
}

export default StockInfo;


