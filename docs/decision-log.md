# OpsPulse – Technical Decision Log

## 1. Project Architecture

**Decision:** React component-based architecture.

**Reason:** Reusable components make the application easier to maintain, update and understand.

## 2. Programming Language

**Decision:** JavaScript.

**Reason:** JavaScript keeps the project beginner-friendly and works directly with React.

## 3. Styling

**Decision:** Tailwind CSS.

**Reason:** It provides responsive styling and helps maintain consistent design across pages.

## 4. Routing

**Decision:** React Router DOM.

**Reason:** It allows navigation between Dashboard, Orders, Analytics, Alerts and Settings without reloading the application.

## 5. Data Visualization

**Decision:** Recharts.

**Reason:** It provides responsive charts for displaying revenue and order status information.

## 6. Icons

**Decision:** Lucide React.

**Reason:** It provides consistent and lightweight interface icons.

## 7. Data Management

**Decision:** Mock data and a simulated API service.

**Reason:** A real backend was outside the current project scope. Mock data allows the dashboard to demonstrate data loading and interface behavior.

## 8. State Management

**Decision:** React useState, useEffect and custom hooks.

**Reason:** These features manage component state, data fetching and loading/error states without requiring an additional state management library.

## 9. Responsive Design

**Decision:** Tailwind responsive utility classes.

**Reason:** They help adapt the dashboard layout to desktop, tablet and mobile screens.

## 10. Limitations

The application currently uses sample data and does not connect to a real backend or database. Profile settings are not permanently stored.