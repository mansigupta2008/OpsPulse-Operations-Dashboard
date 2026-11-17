# OpsPulse – Operations Dashboard

A responsive Operations Management Dashboard built using React.js, JavaScript, Vite and Tailwind CSS.

## 1. Project Overview

OpsPulse is a frontend dashboard application designed to help administrators monitor business operations, customer orders, revenue and important alerts.

It provides a simple interface for viewing operational information, searching orders, filtering order statuses and reviewing business analytics.

## 2. Features

- Responsive dashboard layout.
- Revenue, orders, customers and pending orders KPI cards.
- Monthly revenue chart.
- Order status pie chart.
- Orders management table.
- Search orders by ID, customer and product.
- Filter orders by status.
- Alerts and notifications management.
- Dismiss alerts.
- Administrator profile settings.
- Client-side form validation.
- Loading, error and empty states.
- 404 page for invalid routes.
- Reusable React components.

## 3. Technology Stack

| Technology | Purpose |
|---|---|
| React.js | User interface |
| JavaScript | Application logic |
| Vite | Development server and build tool |
| Tailwind CSS | Responsive styling |
| React Router DOM | Page navigation |
| Recharts | Data visualization |
| Lucide React | Icons |

## 4. Project Structure

```text
project-2-opspulse/
│
├── public/
├── src/
│   ├── Components/
│   ├── Pages/
│   ├── Data/
│   ├── Services/
│   ├── Hooks/
│   ├── Utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── docs/
├── screenshots/
├── index.html
├── package.json
└── README.md
```

## 5. Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Open the project folder:

```bash
cd project-2-opspulse
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 6. Available Pages

1. Dashboard
2. Orders
3. Analytics
4. Alerts
5. Settings

## 7. Sample Data

The project currently uses predefined mock data and a simulated API service for demonstration purposes.

It does not require a real backend or database.

## 8. Documentation

Additional project documentation is available in the `docs/` folder:

- requirements.md
- acceptance-criteria.md
- decision-log.md
- test-cases.md
- validation-report.md
- limitations.md

## 9. Future Improvements

- Real backend API integration.
- Database connectivity.
- Administrator authentication.
- Real-time notifications.
- Persistent profile settings.
- Automated testing.

## 10. Project Status

Frontend dashboard developed as part of frontend development internship practice.

The project uses sample data and is intended for demonstration and learning purposes.