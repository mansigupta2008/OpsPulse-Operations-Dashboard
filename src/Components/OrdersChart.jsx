
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { ordersData } from "../Data/mockAnalytics";

function OrdersChart() {
  const COLORS = ["#16a34a", "#2563eb", "#f59e0b", "#ef4444"];

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-800">
          Order Status
        </h2>

        <p className="text-sm text-slate-500">
          Overview of all orders
        </p>
      </div>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={ordersData}
              dataKey="count"
              nameKey="status"
              cx="50%"
              cy="45%"
              outerRadius={85}
              label
            >
              {ordersData.map((entry, index) => (
                <Cell
                  key={entry.status}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default OrdersChart;
