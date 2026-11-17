
import { useCallback, useEffect, useState } from "react";
import { getDashboardData } from "../services/dashboardService";

function useDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDashboard = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const result = await getDashboardData();
      setData(result);
    } catch (err) {
      setError("Unable to load dashboard data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  return {
    data,
    loading,
    error,
    retry: fetchDashboard,
  };
}

export default useDashboard;
