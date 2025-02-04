import { useState } from "react";
import { IoMdColorPalette } from "react-icons/io";
import "./switchercolors.css";

const SwitcherColors = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("color-1");

  // Define as paletas de cores
  const colorThemes = {
    "color-1": {
      "--skin-color": "#ec1839",
    },
    "color-2": {
      "--skin-color": "#fa5b0f",
    },
    "color-3": {
      "--skin-color": "#37b182",
    },
    "color-4": {
      "--skin-color": "#1852b4",
    },
    "color-5": {
      "--skin-color": "#f021b2",
    },
  };

  // Alterna o estado do switcher
  const toggleSwitcher = () => {
    setIsOpen(!isOpen);
  };

  // Troca de tema de cores
  const handleColorChange = (color) => {
    setSelectedColor(color);
    const root = document.documentElement;
    const theme = colorThemes[color];
    if (theme) {
      Object.keys(theme).forEach((variable) => {
        root.style.setProperty(variable, theme[variable]);
      });
    }
  };

  return (
    <div className={`style-switcher ${isOpen ? "open" : ""}`}>
      {/* Botão para abrir/fechar o switcher */}
      <div
        className="style-switcher-toggler s-icon"
        onClick={toggleSwitcher}
        aria-label="Abrir configurações de cores"
      >
        <IoMdColorPalette />
      </div>
      <div className="colors">
        <span
          className={`color-1 ${selectedColor === "color-1" ? "active" : ""}`}
          onClick={() => handleColorChange("color-1")}
          aria-label="Tema Vermelho"
        ></span>
        <span
          className={`color-2 ${selectedColor === "color-2" ? "active" : ""}`}
          onClick={() => handleColorChange("color-2")}
          aria-label="Tema Laranja"
        ></span>
        <span
          className={`color-3 ${selectedColor === "color-3" ? "active" : ""}`}
          onClick={() => handleColorChange("color-3")}
          aria-label="Tema Verde"
        ></span>
        <span
          className={`color-4 ${selectedColor === "color-4" ? "active" : ""}`}
          onClick={() => handleColorChange("color-4")}
          aria-label="Tema Azul"
        ></span>
        <span
          className={`color-5 ${selectedColor === "color-5" ? "active" : ""}`}
          onClick={() => handleColorChange("color-5")}
          aria-label="Tema Rosa"
        ></span>
      </div>
    </div>
  );
};

export default SwitcherColors;
