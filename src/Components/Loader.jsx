
function Loader() {
  return (
    <div
      className="flex flex-col items-center justify-center py-16"
      role="status"
      aria-live="polite"
    >
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

      <p className="mt-4 text-sm font-medium text-slate-600">
        Loading dashboard data...
      </p>
    </div>
  );
}

export default Loader;
