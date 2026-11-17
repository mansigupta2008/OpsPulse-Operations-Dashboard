
import { Link } from "react-router-dom";
import { AlertCircle, ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">

      <div className="text-center">

        <div className="flex justify-center mb-5">
          <AlertCircle size={60} className="text-blue-600" />
        </div>

        <h1 className="text-7xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="text-2xl font-bold text-slate-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-slate-500 mt-3">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

      </div>
    </div>
  );
}

export default NotFound;
