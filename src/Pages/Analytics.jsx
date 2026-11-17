import RevenueChart from "../Components/RevenueChart";
import OrdersChart from "../Components/OrdersChart";
import { revenueData, ordersData } from "../Data/mockAnalytics";

function Analytics() {
  const totalRevenue = revenueData.reduce(
    (total, item) => total + item.revenue,
    0
  );

  const totalOrders = ordersData.reduce(
    (total, item) => total + item.count,
    0
  );

  const deliveredOrders =
    ordersData.find((item) => item.status === "Delivered")?.count || 0;

  const deliveryRate = totalOrders
    ? Math.round((deliveredOrders / totalOrders) * 100)
    : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Analytics</h1>
        <p className="text-sm text-slate-500 mt-1">
          Business performance and operations insights.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm text-slate-500">Yearly Revenue</p>
          <h2 className="text-2xl font-bold mt-3">
            ₹{totalRevenue.toLocaleString("en-IN")}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm text-slate-500">Total Orders</p>
          <h2 className="text-2xl font-bold mt-3">{totalOrders}</h2>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-sm text-slate-500">Delivery Rate</p>
          <h2 className="text-2xl font-bold text-green-600 mt-3">
            {deliveryRate}%
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <RevenueChart />
        <OrdersChart />
      </div>
    </div>
  );
}

export default Analytics;
