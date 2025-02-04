import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Web Developer",
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        "Mobile Development",
        2000,
        "Network technician",
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Typing;
