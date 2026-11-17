
import mockOrders from "../Data/mockOrders";

function OrdersTable({ orders = mockOrders }) {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";

      case "Processing":
        return "bg-blue-100 text-blue-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-slate-800">
          Recent Orders
        </h2>

        <p className="text-sm text-slate-500">
          Latest customer orders
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-200 text-sm text-slate-500">
              <th className="py-3 px-3">Order ID</th>
              <th className="py-3 px-3">Customer</th>
              <th className="py-3 px-3">Product</th>
              <th className="py-3 px-3">Amount</th>
              <th className="py-3 px-3">Date</th>
              <th className="py-3 px-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >
                  <td className="py-4 px-3 text-sm font-medium text-blue-600">
                    {order.id}
                  </td>

                  <td className="py-4 px-3 text-sm text-slate-700">
                    {order.customer}
                  </td>

                  <td className="py-4 px-3 text-sm text-slate-700">
                    {order.product}
                  </td>

                  <td className="py-4 px-3 text-sm font-semibold text-slate-800">
                    ₹{order.amount.toLocaleString("en-IN")}
                  </td>

                  <td className="py-4 px-3 text-sm text-slate-500">
                    {order.date}
                  </td>

                  <td className="py-4 px-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-10 text-slate-500"
                >
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersTable;
