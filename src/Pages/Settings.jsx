
import { useState } from "react";
import { Save } from "lucide-react";

function Settings() {
  const [name, setName] = useState("Admin");
  const [email, setEmail] = useState("admin@opspulse.com");
  const [role, setRole] = useState("Administrator");

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (name.trim().length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!role.trim()) {
      newErrors.role = "Please enter your role.";
    }

    setErrors(newErrors);
    setMessage("");

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setMessage("Settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Settings
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage your administrator profile.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm max-w-2xl">
        <h2 className="text-lg font-bold text-slate-800 mb-6">
          Profile Information
        </h2>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="admin-name" className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>

            <input
              id="admin-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full border border-slate-300 rounded-lg px-4 py-3"
            />

            {errors.name && (
              <p id="name-error" className="text-sm text-red-600 mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="admin-email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>

            <input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full border border-slate-300 rounded-lg px-4 py-3"
            />

            {errors.email && (
              <p id="email-error" className="text-sm text-red-600 mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="admin-role" className="block text-sm font-medium text-slate-700 mb-2">
              Role
            </label>

            <input
              id="admin-role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              aria-invalid={Boolean(errors.role)}
              aria-describedby={errors.role ? "role-error" : undefined}
              className="w-full border border-slate-300 rounded-lg px-4 py-3"
            />

            {errors.role && (
              <p id="role-error" className="text-sm text-red-600 mt-1">
                {errors.role}
              </p>
            )}
          </div>

          {message && (
            <p role="status" className="text-sm font-medium text-green-600">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
          >
            <Save size={18} />
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
