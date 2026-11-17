
import mockApiRequest from "./api";

import mockOrders from "../Data/mockOrders";
import mockAlerts from "../Data/mockAlerts";

import {
  revenueData,
  ordersData,
} from "../Data/mockAnalytics";

export async function getDashboardData() {
  const data = {
    orders: mockOrders,
    alerts: mockAlerts,
    revenue: revenueData,
    orderStatus: ordersData,
  };

  return await mockApiRequest(data);
}

export async function getOrders() {
  return await mockApiRequest(mockOrders);
}

export async function getAlerts() {
  return await mockApiRequest(mockAlerts);
}

export async function getAnalytics() {
  return await mockApiRequest({
    revenue: revenueData,
    orders: ordersData,
  });
}
