import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/assets/colors/color-1.css";
import Home from "./pages/Home/Home";
<<<<<<< HEAD
import Nav from "../src/Components/Nav/Nav";
import About from "./pages/About/About";
import Services from "./pages/services/Services";
import Contact from "./pages/Contact/Contact";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <Home />
    <About />
    <Services />
    <Contact />
=======

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
>>>>>>> 7f0cd5e (First commit)
  </StrictMode>
);
