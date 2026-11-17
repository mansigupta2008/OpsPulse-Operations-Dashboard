
import Alerts from "../Components/Alerts";

function AlertsPage() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Alerts & Notifications
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Monitor important updates and operational issues.
        </p>
      </div>

      <Alerts />

    </div>
  );
}

export default AlertsPage;
