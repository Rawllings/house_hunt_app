import React from "react";

function SlideFour() {
  return (
    <div>
      <div className="bg-gradient-to-tr from-purple-700 to-green-400 h-96 w-full  relative">
        <img
          src="https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg"
          alt=""
          className="mt-8 w-full h-full object-cover absolute mix-blend-overlay"
        />

        <div className="p-24">
          <h1 className="text-white text-6xl text-left font-bold pt-[150px] ">
            Dinning room
          </h1>
          <h2 className="text-white text-xl text-left font-light mt-5">
            Perfect place to share a meal with the family.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SlideFour;
