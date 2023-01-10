import { styles } from "../style";
import { navLinks } from "../constants";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <header className="w-full bg-slate-800 py-4">
      <nav className={`${styles.paddingX} w-full xl:max-w-screen-xl mx-auto`}>
        <div className="text-slate-50 flex items-center justify-between">
          <div className="w-48">
            <a
              href="#home"
              className="text-2xl italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500"
            >
              Nazmul Hasan
            </a>
          </div>
          <ul
            className={`list-none sm:flex hidden items-center justify-end gap-5`}
          >
            {navLinks.map((item, index) => (
              <li
                key={index}
                className={`font-poppins font-medium text-sm ${
                  active === item.title ? "text-white" : "text-slate-400"
                }`}
                onClick={() => setActive(item.title)}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div
            className="sm:hidden block text-xl cursor-pointer relative"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <AiOutlineClose /> : <FiMenu />}

            <ul
              className={`${
                toggle ? "flex" : "hidden"
              } flex-col items-center justify-start w-40 absolute top-16 right-0 bg-slate-700 min-w-[150px] p-6 rounded-xl bg-gradient-to-r from-slate-800 to-slate-600 sidebar`}
            >
              {navLinks.map((item, index) => (
                <li
                  key={item.id}
                  className={`font-normal text-sm cursor-pointer ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                  onClick={() => setActive(item.title)}
                >
                  <a
                    href={`#${item.id}`}
                    className={`${
                      active === item.title ? "text-slate-50" : "text-slate-400"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
