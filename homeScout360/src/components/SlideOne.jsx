import React from "react";

function SlideOne() {
  return (
    <div className="max-w-[1440px] m-auto ">
      <div className="bg-gradient-to-tr from-purple-900 to-green-400 h-96 w-full  relative">
        <img
          src="http://bit.ly/3qJ1y7T"
          alt=""
          className="mt-8 w-full h-full object-cover absolute mix-blend-overlay"
        />

        <div className="p-24">
          <h1 className="text-white text-6xl text-left font-bold pt-[150px] ">
            Balcony
          </h1>
          <h2 className="text-white text-xl text-left font-light mt-5">
            This is the perfect view of the Mountains in the morning
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SlideOne;
