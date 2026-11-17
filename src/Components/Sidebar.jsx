
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  ChartColumn,
  Bell,
  Settings,
} from "lucide-react";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: ShoppingBag,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: ChartColumn,
    },
    {
      name: "Alerts",
      path: "/alerts",
      icon: Bell,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="w-full md:w-64 bg-white border-r border-slate-200 min-h-full p-4">
      <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">
        Main Menu
      </h2>

      <nav aria-label="Main navigation" className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              <Icon size={20} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
