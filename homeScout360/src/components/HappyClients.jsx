import React, { useState, useEffect } from "react";

const HappyClients = () => {
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
      <div className="flex md:order-2 mt-10 justify-center pb-10">
        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
        >
          <svg
            className="w-5 h-5"
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
          <span className="sr-only">Search</span>
        </button>
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
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HappyClients;
