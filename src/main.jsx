import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/assets/colors/color-1.css";
import Home from "./pages/Home/Home";
import Nav from "../src/Components/Nav/Nav";
import About from "./pages/About/About";
import Services from "./pages/services/Services";
import Contact from "./pages/Contact/Contact";
import ProjectsSection from "./pages/Projects";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <Home />
    <About />
    <ProjectsSection />
    <Services />
    <Contact />
  </StrictMode>
);
