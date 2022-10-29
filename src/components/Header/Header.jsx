import { useState, useRef, useEffect } from "react";

import Darklogo from "../../assets/images/darklogo.svg";
import Lightlogo from "../../assets/images/lightlogo.svg";
import moon from "../../assets/images/moon.svg";
import sun from "../../assets/images/sun.svg";

import { Link } from "react-scroll";

import "./Header.css";

const Header = ({ activeTheme, navLinks }) => {
  const { theme, setTheme } = activeTheme;
  const [toggle, setToggle] = useState(window.innerWidth < 640 ? false : true);

  const [activeLink, setActiveLink] = useState(document.location.hash);

  const navRef = useRef();
  const menuToggle = useRef();

  useEffect(() => {
    document.body.addEventListener(
      "click",
      (e) => {
        if (navRef.current.contains(e.target)) {
          return;
        }
        if (menuToggle.current.contains(e.target)) {
          return;
        }
        if (window.innerWidth < 640) {
          setToggle(false);
        }
      },
      { capture: true }
    );
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white dark:bg-[#1E1E1E] `}>
      <div className="p-4 mx-auto flex justify-between sm:items-center container">
        <Link to="home" className="cursor-pointer" spy smooth offset={-139}>
          <img
            className="w-24"
            alt="logo"
            src={theme === "dark" ? Lightlogo : Darklogo}
            onClick={() => setActiveLink(null)}
          />
        </Link>

        <nav
          ref={navRef}
          className={`${
            toggle ? "flex nav flex-col" : "hidden"
          } absolute top-12 w-56 right-4 pt-4 sm:pt-0 sm:border-none sm:shadow-none sm:items-center px-4 rounded-md border dark:border-none backdrop-blur-md shadow-sm sm:static sm:flex-row sm:w-fit  ${
            theme === "dark" ? "bg-nav" : "bg-[#ffffffde]"
          }`}
        >
          <ul className="sm:flex sm:flex-1">
            {navLinks.map((navLink, index) => {
              return (
                <li
                  className={`py-1 sm:py-0 sm:px-1 md:px-2 lg:px-4`}
                  key={index}
                >
                  <Link
                    to={navLink.link}
                    className="cursor-pointer"
                    smooth
                    hashSpy
                  >
                    <p
                      onClick={() => setActiveLink(navLink.link)}
                      className={`${
                        activeLink === navLink.link ? "font-semibold" : ""
                      }`}
                    >
                      {navLink.display}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="flex flex-col sm:ml-8 md:ml-16 lg:ml-40 xl:ml-[19rem] sm:gap-4 sm:flex-row items-center">
            <li className="order-2 sm:order-1">
              <img
                className="w-9 sm:w-7 h-14 cursor-pointer"
                alt="dark theme toggle"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                src={theme === "dark" ? sun : moon}
              />
            </li>
            <li className="order-1 w-full sm:w-fit py-3 sm:px-4 sm:py-[0.4rem] dark:shadow text-center mt-4 sm:mt-0 btn btnlight dark:btndark">
              <a href="#resume">Resume</a>
            </li>
          </ul>
        </nav>

        <div
          onClick={() => setToggle((prev) => !prev)}
          ref={menuToggle}
          className=" w-6 cursor-pointer flex items-center justify-center sm:hidden"
        >
          <svg
            className="w-full"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 10.25C0.585786 10.25 0.25 10.5858 0.25 11C0.25 11.4142 0.585786 11.75 1 11.75V10.25ZM17 11.75C17.4142 11.75 17.75 11.4142 17.75 11C17.75 10.5858 17.4142 10.25 17 10.25V11.75ZM1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75V5.25ZM17 6.75C17.4142 6.75 17.75 6.41421 17.75 6C17.75 5.58579 17.4142 5.25 17 5.25V6.75ZM1 0.25C0.585786 0.25 0.25 0.585786 0.25 1C0.25 1.41421 0.585786 1.75 1 1.75V0.25ZM17 1.75C17.4142 1.75 17.75 1.41421 17.75 1C17.75 0.585786 17.4142 0.25 17 0.25V1.75ZM1 11.75H17V10.25H1V11.75ZM1 6.75H17V5.25H1V6.75ZM1 1.75H17V0.25H1V1.75Z"
              fill={`${theme === "dark" ? "#fefefe" : "black"}`}
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
