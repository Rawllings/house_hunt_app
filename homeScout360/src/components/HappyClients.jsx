import React, { useState, useEffect } from "react";
import { AiOutlineDown } from "react-icons/ai";

const HappyClients = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [clients, setClients] = useState(0);
  const [houses, setHouses] = useState(0);
  const [location, setLocation] = useState(0);

  //   clients

  useEffect(() => {
    const interval = setInterval(() => {
      if (clients < 300) {
        setClients(clients + 1);
      }
    }, 10); // Adjust the interval speed as needed

    return () => {
      clearInterval(interval);
    };
  }, [clients]);

  //   houses

  useEffect(() => {
    const interval = setInterval(() => {
      if (houses < 100) {
        setHouses(houses + 1);
      }
    }, 10); // Adjust the interval speed as needed

    return () => {
      clearInterval(interval);
    };
  }, [houses]);

  //   location

  useEffect(() => {
    const interval = setInterval(() => {
      if (location < 80) {
        setLocation(location + 1);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [location]);

  return (
    <div className="bg-slate-100 pb-10 pt-10 rounded-md mt-20 border-2 mx-10">
      <div
        className=" flex flex-row text-center ml-20"
        style={{ marginLeft: "120px" }}
      >
        <div className=" mt-4 p-10 px-12 bg-slate-300 rounded">
          <h2 className="text-3xl font-bold ">Happy Clients</h2>
          <p className="text-3xl font-semibold">
            {" "}
            <span className="text-red-600">{clients}</span> clients
          </p>
        </div>

        <div className="mt-4 p-10 bg-slate-300 ml-10 rounded">
          <h2 className="text-3xl font-bold ">Available homes</h2>
          <p className="text-3xl font-semibold">
            {" "}
            <span className="text-red-600">{houses} </span>houses
          </p>
        </div>

        <div className="mt-4 p-10 bg-slate-300 ml-10 rounded px-20">
          <h2 className="text-3xl font-bold">Locations</h2>
          <p className="text-3xl font-semibold">
            {" "}
            <span className="text-red-600">{location} </span>location
          </p>
        </div>
      </div>

      <div className="flex md:order-2 mt-10 justify-center pb-10 gap-10">
        <div className="relative hidden md:block">
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

        <div className="relative inline-block">
          <div>
            <button
              onClick={toggleMenu}
              className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded focus:outline-none"
            >
              <span className="flex gap-2 ">
                All Bedrooms{" "}
                <span className="pt-1">
                  <AiOutlineDown />
                </span>
              </span>
            </button>
          </div>

          {isMenuOpen && (
            <ul className="absolute bg-white mt-2 py-2 w-36 shadow-lg">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  1 Bedroom
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  2 Bedrooms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  3 Bedrooms
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  4 Bedrooms
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* <input
          type="text"
          className="p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        /> */}
      </div>
    </div>
  );
};

export default HappyClients;
