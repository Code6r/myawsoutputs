import { formatCurrency } from "@utils/currency";

interface CartSummaryProps {
  total: number;
  itemCount: number;
}

const CartSummary = ({ total, itemCount }: CartSummaryProps) => {
  const savings = Math.round(total * 0.08);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-primary-50 via-white to-emerald-50 p-4 text-sm text-slate-700">
      <div className="flex items-center justify-between">
        <span>Items</span>
        <span className="font-semibold">{itemCount}</span>
      </div>
      <div className="mt-1 flex items-center justify-between">
        <span>Delivery</span>
        <span className="text-emerald-600">Free · 15 min</span>
      </div>
      <div className="mt-1 flex items-center justify-between">
        <span>Savings</span>
        <span className="text-emerald-600">-{formatCurrency(savings)}</span>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-emerald-100 pt-3 text-sm font-semibold text-slate-900">
        <span>To pay</span>
        <span>{formatCurrency(total - savings)}</span>
      </div>
    </div>
  );
};

export default CartSummary;

