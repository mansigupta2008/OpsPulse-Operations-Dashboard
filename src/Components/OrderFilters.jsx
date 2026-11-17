
import { Search, Filter } from "lucide-react";

function OrderFilters({
  search,
  setSearch,
  status,
  setStatus,
}) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4">

      <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2 flex-1">
        <Search size={18} className="text-slate-400" />

        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search order or customer..."
          aria-label="Search orders"
          className="outline-none w-full text-sm"
        />
      </div>

      <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2">
        <Filter size={18} className="text-slate-400" />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          aria-label="Filter orders by status"
          className="outline-none bg-transparent text-sm"
        >
          <option value="All">All Orders</option>
          <option value="Delivered">Delivered</option>
          <option value="Processing">Processing</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

    </div>
  );
}

export default OrderFilters;
