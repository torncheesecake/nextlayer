import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppShell from "./App";
import "./App.css";
import { router } from "./routes"; // Import router from the new routes.jsx
import ErrorBoundary from "./components/ErrorBoundary";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <AppShell>
          <RouterProvider router={router} />
        </AppShell>
      </HelmetProvider>
    </ErrorBoundary>
  </StrictMode>,
);
