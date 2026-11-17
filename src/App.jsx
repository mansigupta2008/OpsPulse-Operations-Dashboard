
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Analytics from "./Pages/Analytics";
import AlertsPage from "./Pages/AlertsPage";
import Settings from "./Pages/Settings";
import NotFound from "./Pages/NotFound";

function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 min-w-0 p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/alerts" element={<AlertsPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
