
import { AlertCircle, RefreshCw } from "lucide-react";

function ErrorState({ message = "Something went wrong", onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="bg-red-50 p-4 rounded-full">
        <AlertCircle size={35} className="text-red-500" />
      </div>

      <h3 className="text-lg font-semibold text-slate-800 mt-4">
        Unable to load data
      </h3>

      <p className="text-sm text-slate-500 mt-2">
        {message}
      </p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <RefreshCw size={16} />
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorState;
    