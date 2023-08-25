// import React from 'react'
import { BiPhone } from "react-icons/bi";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [navbarBg, setNavbarBg] = useState("bg-gray-900");

  // const handleScroll = () => {
  //   if (window.scrollY > 0) {
  //     setNavbarBg("bg-transparent"); // Change background color on scroll
  //   } else {
  //     setNavbarBg("bg-gray-900"); // Reset background color when scrolled back to top
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <nav
      className={`py-1 px-4 fixed top-0 left-0 w-full z-10 ${navbarBg} fixed transition-all duration-100 `}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="src/images/HomeScout360 Logo white.png"
            className="h-8 "
            alt="HomeScout360 logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-4">
            HomeScout360
          </span>
        </a>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-white md:p-0  md:hover:text-red-600 md:dark:hover:text-red-600 md:dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0 md:dark:hover:text-red-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-600 md:p-0 dark:text-white md:dark:hover:text-red-600 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact Us
              </a>
            </li>

            <li>
              <div>
                <h1 className="text-red-600">+254 (7) 27 37 11 99</h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
