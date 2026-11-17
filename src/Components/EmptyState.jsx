
import { Inbox } from "lucide-react";

function EmptyState({ message = "No data available" }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="bg-slate-100 p-4 rounded-full">
        <Inbox size={35} className="text-slate-400" />
      </div>

      <h3 className="text-lg font-semibold text-slate-700 mt-4">
        Nothing to show
      </h3>

      <p className="text-sm text-slate-500 mt-2">
        {message}
      </p>
    </div>
  );
}

export default EmptyState;
