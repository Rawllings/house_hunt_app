import React from "react";

function SlideThree() {
  return (
    <div>
      <div className=" bg-gradient-to-tr from-purple-700 to-green-400 h-96 w-full  relative">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg"
          alt=""
          className="mt-8 w-full h-full object-cover absolute mix-blend-overlay"
        />

        <div className="p-24">
          <h1 className="text-white text-6xl text-left font-bold pt-[150px] ">
            Study room
          </h1>
          <div>
            <h2 className="text-white text-xl text-left font-light mt-5">
              Serene envinroment to study.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideThree;
