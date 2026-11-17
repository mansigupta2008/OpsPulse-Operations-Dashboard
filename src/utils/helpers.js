
export function searchOrders(orders, searchText) {
  const search = searchText.toLowerCase().trim();

  if (!search) return orders;

  return orders.filter((order) =>
    order.id.toLowerCase().includes(search) ||
    order.customer.toLowerCase().includes(search) ||
    order.product.toLowerCase().includes(search)
  );
}

export function filterOrdersByStatus(orders, status) {
  if (status === "All") return orders;

  return orders.filter((order) => order.status === status);
}

export function getOrderCounts(orders) {
  return {
    total: orders.length,
    delivered: orders.filter((order) => order.status === "Delivered").length,
    processing: orders.filter((order) => order.status === "Processing").length,
    pending: orders.filter((order) => order.status === "Pending").length,
    cancelled: orders.filter((order) => order.status === "Cancelled").length,
  };
}
