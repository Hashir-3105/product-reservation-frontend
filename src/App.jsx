import "./App.css";
import { useMemo, useState, useCallback } from "react";

import { useReservationTimer } from "./hooks/useReservationTimer";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

const TOTAL_STOCK = 5;
const RESERVATION_MS = 2 * 60 * 1000;

const formatMs = (ms) => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const FOOTER_LABELS = {
  product: "Product",
  cart: "Reserved",
  checkout: "Success",
  expired: "Reservation Expired",
};

function App() {
  const [view, setView] = useState("product");
  const [reservedCount, setReservedCount] = useState(0);
  const [purchasedCount, setPurchasedCount] = useState(0);

  const { remainingMs, startTimer, clearTimer } = useReservationTimer(() => {
    setReservedCount((c) => Math.max(0, c - 1));
    setView("expired");
  });

  const availableCount = useMemo(
    () => Math.max(0, TOTAL_STOCK - reservedCount - purchasedCount),
    [reservedCount, purchasedCount],
  );

  const showCart = view === "cart" || view === "checkout";
  const isExpired = view === "expired";

  const updateReservedCount = useCallback(
    (delta) => setReservedCount((c) => Math.max(0, c + delta)),
    [],
  );

  const handleReserve = () => {
    if (availableCount <= 0 || remainingMs > 0) return;
    updateReservedCount(1);
    startTimer(RESERVATION_MS);
    setView("cart");
  };

  const handleCancel = () => {
    clearTimer();
    updateReservedCount(-1);
    setView("product");
  };

  const handleCompletePurchase = () => {
    clearTimer();
    updateReservedCount(-1);
    setPurchasedCount((c) => c + 1);
    setView("checkout");
  };

  const handleBackToProduct = () => setView("product");

  const footerStateLabel = useMemo(
    () => FOOTER_LABELS[view] || "Product",
    [view],
  );

  return (
    <>
      <MainContent
        view={view}
        reservedCount={reservedCount}
        availableCount={availableCount}
        remainingMs={remainingMs}
        isExpired={isExpired}
        showCart={showCart}
        handleReserve={handleReserve}
        handleCancel={handleCancel}
        handleCompletePurchase={handleCompletePurchase}
        handleBackToProduct={handleBackToProduct}
        TOTAL_STOCK={TOTAL_STOCK}
        formatMs={formatMs}
      />
      <Footer
        footerStateLabel={footerStateLabel}
        availableCount={availableCount}
        reservedCount={reservedCount}
      />
    </>
  );
}

export default App;
