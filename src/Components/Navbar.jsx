
import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 px-4 md:px-8 py-4">
      <div className="flex items-center justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold text-blue-700">
            OpsPulse
          </h1>
          <p className="text-sm text-slate-500">
            Operations Dashboard
          </p>
        </div>

        <div className="hidden md:flex items-center bg-slate-100 rounded-lg px-3 py-2 w-72">
          <Search size={18} className="text-slate-400" />

          <input
            type="search"
            placeholder="Search anything..."
            aria-label="Search dashboard"
            className="bg-transparent outline-none px-2 w-full text-sm"
          />
        </div>

        <div className="flex items-center gap-4">

          <button
            type="button"
            aria-label="Notifications"
            className="relative p-2 rounded-lg hover:bg-slate-100"
          >
            <Bell size={22} className="text-slate-600" />

            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
              A
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-800">
                Admin
              </p>
              <p className="text-xs text-slate-500">
                Administrator
              </p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
