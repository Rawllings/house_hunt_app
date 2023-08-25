import React from "react";

function SlideTwo() {
  return (
    <div>
      <div className=' bg-gradient-to-tr from-purple-700 to-green-400 h-96 w-full  relative '>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg"
          alt=""
          className="mt-8 w-full h-full object-cover absolute mix-blend-overlay"
        />

        <div className="p-24">
          <h1 className="text-white text-6xl text-left font-bold pt-[150px]  ">
            Living room
          </h1>
          <h2 className="text-white text-xl text-left font-light mt-5 ">
            Perfect place to relax with your guests.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SlideTwo;
