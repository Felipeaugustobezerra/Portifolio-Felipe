import React from "react";
import "./aside.css";
// import SwitcherColors from "../toggles/SwitcherColors";
// import DarkMode from "../toggles/DarkMode";

const Main = () => {
  return (
    <div className="main-container">
      <div className="aside">
        <div className="logo">
          <a href="">
            <span>F</span>elipe
          </a>
        </div>
        <div className="nav-toggler">
          <span></span>
        </div>
      </div>
      {/* <SwitcherColors />
      <DarkMode /> */}
    </div>
  );
};

export default Main;
