import React, { useState } from "react";
import moon from "../assets/images/moon.png";
import sun from "../assets/images/sun.png";

const Header = () => {
  const [lightMode, setLightMode] = useState(false);
  console.log(lightMode);

  return (
    <nav className="bg-cyan-800 ">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-20 text-2xl italic font-bold text-white">
          <a href="#home">Nazmul</a>
        </div>
        <ul className="flex items-center justify-center gap-5 font-medium text-sm py-5 ">
          <li>
            <a className="text-slate-100 hover:text-slate-300" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="text-slate-100 hover:text-slate-300" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="text-slate-100 hover:text-slate-300" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="text-slate-100 hover:text-slate-300" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="">
          <div
            className=" w-10 h-6 flex items-center justify-center bg-white rounded-full relative"
            onClick={() => setLightMode(!lightMode)}
          >
            <img className="w-5" src={moon} alt="moon" />
            <img className="w-5" src={sun} alt="sun" />
            <button
              className="w-5 h-5 bg-slate-500 rounded-full absolute  left-0"
              style={lightMode ? { left: 0 } : { left: "20px" }}
            ></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
