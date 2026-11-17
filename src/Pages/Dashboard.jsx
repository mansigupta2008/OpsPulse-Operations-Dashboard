
import KPICard from "../Components/KPICard";
import RevenueChart from "../Components/RevenueChart";
import OrdersChart from "../Components/OrdersChart";
import OrdersTable from "../Components/OrdersTable";
import Alerts from "../Components/Alerts";
import Loader from "../Components/Loader";
import EmptyState from "../Components/EmptyState";
import ErrorState from "../Components/ErrorState";
import useDashboard from "../hooks/useDashboard";

function Dashboard() {
  const { data, loading, error, retry } = useDashboard();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={retry} />;
  }

  if (!data) {
    return <EmptyState message="Dashboard data is not available." />;
  }

  const orders = data.orders || [];

  if (orders.length === 0) {
    return <EmptyState message="No orders are available right now." />;
  }

  const totalRevenue = orders.reduce(
    (total, order) => total + order.amount,
    0
  );

  const totalOrders = orders.length;

  const totalCustomers = new Set(
    orders.map((order) => order.customer)
  ).size;

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard Overview
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Welcome back! Here is your operations summary.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <KPICard
          title="Total Revenue"
          value={`₹${totalRevenue.toLocaleString("en-IN")}`}
          change="Sample data"
          icon="revenue"
          trend="up"
        />

        <KPICard
          title="Total Orders"
          value={totalOrders}
          change="Sample data"
          icon="orders"
          trend="up"
        />

        <KPICard
          title="Total Customers"
          value={totalCustomers}
          change="Sample data"
          icon="customers"
          trend="up"
        />

        <KPICard
          title="Pending Orders"
          value={pendingOrders}
          change="Needs attention"
          icon="pending"
          trend="down"
        />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <RevenueChart />
        <OrdersChart />
      </div>

      <OrdersTable orders={orders} />

      <Alerts />
    </div>
  );
}

export default Dashboard;
