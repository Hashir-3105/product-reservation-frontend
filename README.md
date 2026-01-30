# Product Reservation Frontend

This is a frontend-only React application built as part of a practical assignment to recreate a product reservation flow based on a provided design.

The main goal of this project was to match the UI layout and user flow as closely as possible while keeping the code clean and easy to understand.

---

## Overview

The application allows a user to reserve a limited-stock product, view reserved items in a cart, cancel reservations, and complete a simple checkout flow.

All logic is handled on the frontend only — there is no backend, API, or data persistence.
**Note:** The footer is implemented as sticky at the bottom of the viewport, so it remains visible on scroll. This slightly differs from the reference Figma design where the footer scrolls with the page.


---

## Tech Stack

- React (Vite)
- JavaScript (Functional Components)
- Tailwind CSS
- Custom React Hooks

---

## State Management Approach

State is managed using **React’s built-in hooks**, without using any external state management libraries.

- The main application state is handled in the `App` component
- `useState` is used to track:
  - The current view (product, cart, checkout)
  - Reserved stock count
  - Purchased stock count
- Available stock is calculated from existing state values
- State updates follow a top-down flow and are triggered through callback functions passed to child components

A custom hook (`useReservationTimer`) is used to manage the reservation countdown and expiration logic, keeping timer-related behavior separate from UI components.

This approach keeps the application simple, predictable, and easy to maintain for a frontend-only project.

### Why No Redux or Context?

This project has a small and predictable state scope, so React’s built-in hooks were sufficient and easier to manage.

For larger applications with deeply shared or complex state, I would consider using Context API or a library like Redux. For this assignment, using local state and a custom hook kept the code simpler, easier to read, and aligned with the project requirements.

---

## Assumptions

- The application represents a single user session
- Total stock is fixed at **5 units**
- Reservations expire automatically if not completed
- All data resets on page refresh
- No backend or persistence is involved

---


### Install dependencies
```bash
cd app
npm install

# Start Development Server
npm run dev