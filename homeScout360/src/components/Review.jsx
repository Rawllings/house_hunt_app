import React from "react";
import { AiFillStar } from "react-icons/ai";

function Review() {
  return (
    <div className="mx-10 ">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex gap-5 align-center justify-start ">
          <h1 className=" w-10 h-10 flex items-center justify-center bg-red-600 rounded-full text-white text-2xl font-semibold">
            R
          </h1>
          <h1 className="text-white pt-2">Rawllings</h1>
        </div>

        <div>
          <h1 className="flex pt-2 text-2xl text-yellow-500">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
            <AiFillStar />
          </h1>
        </div>

        <p className="text-start font-normal text-gray-700 pt-5 dark:text-gray-400">
          Great App. It made my house hunting very easy. Highly recommended.
        </p>

        <p className=" pt-5 text-start font-normal text-red-600 ">
          Aug 23, 2023
        </p>
      </div>
    </div>
  );
}

export default Review;
