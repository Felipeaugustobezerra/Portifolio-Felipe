import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/assets/colors/color-1.css";
import Home from "./pages/Home/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
