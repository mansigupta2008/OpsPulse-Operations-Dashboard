
import { useState } from "react";

import OrdersTable from "../Components/OrdersTable";
import OrderFilters from "../Components/OrderFilters";
import Loader from "../Components/Loader";
import EmptyState from "../Components/EmptyState";
import ErrorState from "../Components/ErrorState";

import useOrders from "../hooks/useOrders";

function Orders() {
  const { orders, loading, error, retry } = useOrders();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredOrders = orders.filter((order) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      order.id.toLowerCase().includes(searchText) ||
      order.customer.toLowerCase().includes(searchText) ||
      order.product.toLowerCase().includes(searchText);

    const matchesStatus =
      status === "All" || order.status === status;

    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={retry} />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Orders Management
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          View and manage all customer orders.
        </p>
      </div>

      <OrderFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">
          All Orders
        </h2>

        <span className="text-sm text-slate-500">
          {filteredOrders.length} orders found
        </span>
      </div>

      {filteredOrders.length > 0 ? (
        <OrdersTable orders={filteredOrders} />
      ) : (
        <EmptyState message="No orders match your search or selected filter." />
      )}
    </div>
  );
}

export default Orders;
