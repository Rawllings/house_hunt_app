import React from "react";

function ShareHouse() {
  return (
    <div className="pb-20 ">
      {/* <div>
        <h1 className="text-red-600 font-bold text-4xl text-center">
          ShareHouse
        </h1>
      </div> */}

      <div className="  mt-10 h-96 w-full  relative">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/05/20/10/house-2375119_1280.jpg"
          alt="Houses"
          className="mt-8 w-full h-full object-cover absolute mix-blend-overlay"
        />

        <div className="pt-20 pr-10 ">
          <h1 className="text-red-600 text-right text-4xl  font-bold pt-1 ">
            Have A Vacant House To Share?
          </h1>
          <h2 className="text-black text-right font-serif font-bold pt-4 ">
            Get approved to list on Hauzisha
          </h2>
        </div>

        <div className="ml-[1030px] pt-10">
          <button className="bg-red-600 text-white p-4 rounded hover:bg-slate-500">
            Register to add House
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareHouse;
