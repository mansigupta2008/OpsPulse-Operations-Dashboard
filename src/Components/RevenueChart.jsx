
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { revenueData } from "../Data/mockAnalytics";

function RevenueChart() {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-800">
          Revenue Overview
        </h2>

        <p className="text-sm text-slate-500">
          Monthly revenue performance
        </p>
      </div>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `₹${value / 1000}k`}
            />

            <Tooltip
              formatter={(value) => [
                `₹${Number(value).toLocaleString("en-IN")}`,
                "Revenue",
              ]}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;
