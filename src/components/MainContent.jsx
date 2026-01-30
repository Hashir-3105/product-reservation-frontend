import ProductInfo from "./ProductInfo";
import InfoBox from "./InfoBox";
import { ShoppingCart } from "lucide-react";
import CartPanel from "./CartPanel";
import CheckoutSuccess from "./CheckoutSuccess";
import Confirmed from "./Icons/Confirmed";

function MainContent({
  view,
  reservedCount,
  availableCount,
  remainingMs,
  isExpired,
  showCart,
  handleReserve,
  handleCancel,
  handleCompletePurchase,
  handleBackToProduct,
  TOTAL_STOCK,
  formatMs,
}) {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-225">
        <header className="text-center px-2">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Flash Deal Product Reservation
          </h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Interactive demonstration with working timer and stock management
          </p>
        </header>

        <section className="app-shell-shadow mt-6 rounded-xl border border-slate-200 bg-white px-4 py-6 sm:p-6 lg:p-8">
          <div className="flex min-h-full flex-col gap-8 lg:flex-row lg:justify-center">
            <div className="w-full max-w-md flex flex-col gap-4 mx-auto">
              <div className="inline-flex w-fit items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm">
                Product Page
                {isExpired && (
                  <span className="ml-2 inline-flex items-center rounded-md bg-red-500 px-2 py-1 text-white text-xs font-semibold">
                    Reservation Expired
                  </span>
                )}
              </div>

              <ProductInfo
                title="Wireless Headphones"
                price={99}
                emoji="🎧"
                totalStock={TOTAL_STOCK}
                reserved={reservedCount}
                available={availableCount}
                onReserve={handleReserve}
                isExpired={isExpired}
                remainingMs={remainingMs}
              />

              {view === "product" && !isExpired && (
                <InfoBox title="How it works:">
                  Click &quot;Reserve Now&quot; to add this item to your cart.
                  You&apos;ll have 2 minutes to complete checkout.
                </InfoBox>
              )}

              {showCart && (
                <InfoBox
                  title={
                    view === "checkout"
                      ? "Stock Permanently Reduced:"
                      : "Stock Updated:"
                  }
                >
                  {view === "checkout"
                    ? "Total available stock decreased by 1. Purchase is complete."
                    : "Available stock reduced by 1. Item is now reserved for you."}
                </InfoBox>
              )}
            </div>

            {showCart && (
              <div className="w-full max-w-md flex flex-col gap-4 mx-auto">
                <div className="inline-flex w-fit items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 shadow-sm">
                  {view === "checkout" ? (
                    <Confirmed
                      className={
                        "lucide lucide-circle-check-big w-4 h-4 text-green-600"
                      }
                    />
                  ) : (
                    <ShoppingCart size={16} />
                  )}
                  <span>
                    {view === "checkout" ? "Purchase Complete" : "Cart Active"}
                  </span>
                </div>

                {view === "cart" && (
                  <CartPanel
                    remainingMs={remainingMs}
                    onCancel={handleCancel}
                    onCheckout={handleCompletePurchase}
                    formatMs={formatMs}
                  />
                )}

                {view === "checkout" && (
                  <CheckoutSuccess onContinue={handleBackToProduct} />
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default MainContent;
