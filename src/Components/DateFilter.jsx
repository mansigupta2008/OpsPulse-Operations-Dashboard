
import { CalendarDays } from "lucide-react";

function DateFilter({ date, setDate }) {
  return (
    <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-3 py-2">
      <CalendarDays size={18} className="text-blue-600" />

      <label
        htmlFor="dashboard-date"
        className="text-sm text-slate-600"
      >
        Date:
      </label>

      <input
        id="dashboard-date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="text-sm text-slate-700 outline-none"
      />
    </div>
  );
}

export default DateFilter;
