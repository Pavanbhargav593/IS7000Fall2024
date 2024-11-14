import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css"; // Tailwind styles imported here

import App from "./App"; // Main App Component

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);