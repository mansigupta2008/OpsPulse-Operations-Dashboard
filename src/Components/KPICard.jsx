
import {
  TrendingUp,
  TrendingDown,
  IndianRupee,
  ShoppingCart,
  Users,
  Clock,
} from "lucide-react";

function KPICard({ title, value, change, icon, trend }) {
  const icons = {
    revenue: IndianRupee,
    orders: ShoppingCart,
    customers: Users,
    pending: Clock,
  };

  const Icon = icons[icon] || ShoppingCart;

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

        <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
          <Icon size={22} />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mt-4">
        {value}
      </h2>

      <div className="flex items-center gap-1 mt-2">
        {trend === "down" ? (
          <TrendingDown size={16} className="text-red-500" />
        ) : (
          <TrendingUp size={16} className="text-green-500" />
        )}

        <span
          className={`text-sm font-medium ${
            trend === "down" ? "text-red-500" : "text-green-500"
          }`}
        >
          {change}
        </span>

        <span className="text-xs text-slate-400">
          vs last month
        </span>
      </div>
    </div>
  );
}

export default KPICard;
