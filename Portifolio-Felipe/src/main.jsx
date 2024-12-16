import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/assets/colors/color-1.css";
import Home from "./pages/Home/Home";
import Aside from "./pages/Aside/Aside";
import Nav from "../src/Components/Nav/Nav";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <Aside />
    <Nav />
  </StrictMode>
);
