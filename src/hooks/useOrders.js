
import { useCallback, useEffect, useState } from "react";
import { getOrders } from "../services/dashboardService";

function useOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const result = await getOrders();
      setOrders(result);
    } catch (err) {
      setError("Unable to load orders.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return {
    orders,
    loading,
    error,
    retry: fetchOrders,
  };
}

export default useOrders;
