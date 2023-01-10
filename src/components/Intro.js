import React from "react";
import { styles } from "../style";

const Intro = () => {
  return (
    <section
      className={`h-screen ${styles.boxWidth} ${styles.flexCenter} ${styles.paddingX} mx-auto `}
    >
      <h1 className="font-extrabold text-4xl text-transparent bg-gradient-to-r bg-clip-text from-orange-500 to-amber-300 text-center">
        Responsive Navber Design
      </h1>
    </section>
  );
};

export default Intro;
