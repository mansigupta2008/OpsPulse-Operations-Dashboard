
import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle,
  Info,
  XCircle,
  X,
} from "lucide-react";

import mockAlerts from "../Data/mockAlerts";

function Alerts() {
  const [alerts, setAlerts] = useState(mockAlerts);

  const removeAlert = (id) => {
    setAlerts((previousAlerts) =>
      previousAlerts.filter((alert) => alert.id !== id)
    );
  };

  const getAlertStyle = (type) => {
    switch (type) {
      case "warning":
        return {
          icon: AlertTriangle,
          color: "text-yellow-600",
          background: "bg-yellow-50",
        };

      case "error":
        return {
          icon: XCircle,
          color: "text-red-600",
          background: "bg-red-50",
        };

      case "success":
        return {
          icon: CheckCircle,
          color: "text-green-600",
          background: "bg-green-50",
        };

      default:
        return {
          icon: Info,
          color: "text-blue-600",
          background: "bg-blue-50",
        };
    }
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-slate-800">
          Recent Alerts
        </h2>

        <p className="text-sm text-slate-500">
          Important operations updates
        </p>
      </div>

      <div className="space-y-4">
        {alerts.length > 0 ? (
          alerts.map((alert) => {
            const style = getAlertStyle(alert.type);
            const Icon = style.icon;

            return (
              <div
                key={alert.id}
                className="flex items-start gap-3 p-3 rounded-lg border border-slate-100"
              >
                <div className={`p-2 rounded-lg ${style.background}`}>
                  <Icon size={20} className={style.color} />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-800">
                    {alert.title}
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {alert.message}
                  </p>

                  <p className="text-xs text-slate-400 mt-2">
                    {alert.time}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => removeAlert(alert.id)}
                  aria-label={`Dismiss ${alert.title} alert`}
                  className="text-slate-400 hover:text-red-500"
                >
                  <X size={18} />
                </button>
              </div>
            );
          })
        ) : (
          <p className="text-center py-8 text-slate-500">
            No alerts available.
          </p>
        )}
      </div>
    </div>
  );
}

export default Alerts;
