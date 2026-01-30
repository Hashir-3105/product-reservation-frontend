function StockRow({ label, value, valueClass = "text-slate-900" }) {
  return (
    <div className="flex justify-between text-sm text-slate-600">
      <span>{label}:</span>
      <span className={`font-semibold ${valueClass}`}>{value}</span>
    </div>
  );
}

export default StockRow;


