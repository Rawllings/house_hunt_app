import React from "react";
import { TbLocationBroken } from "react-icons/tb";
import { MdRateReview } from "react-icons/md";
import { MdPhoneCallback } from "react-icons/md";

function HowItWorks() {
  return (
    <div className=" mb-5 pt-0 pb-10">
      <div className="text-center pt-10 pb-10">
        <h1 className="text-4xl text-red-600 font-bold pt-5 pb-3">
          How it works
        </h1>
        <p>
          Many Tenants are finding there
          <span className="text-red-600 font-bold"> dream</span> home through
          HomeScout360.
          <br /> You can do it too.
        </p>
      </div>

      <div className="flex flex-row gap-10 ml-[90px] pb-10">
        <div className="text-6xl text-red-600 bg-slate-200 p-5 rounded-full">
          <TbLocationBroken />
        </div>
        <div className="text-6xl">...................</div>
        <div className="text-6xl text-red-600 bg-slate-200 p-5 rounded-full">
          <MdRateReview />
        </div>
        <div className="text-6xl">...................</div>
        <div className="text-6xl text-red-600 bg-slate-200 p-5 rounded-full">
          <MdPhoneCallback />
        </div>
      </div>

      <div className="flex flex-auto gap-10 ml-[90px] pb-10">
        <div>
          <h1 className="text-xl font-bold text-red-600">Step 1</h1>
          <h1 className="text-xl font-bold">SEARCH A HOUSE</h1>
        </div>

        <div className="ml-[330px]">
          <h1 className="text-xl font-bold text-red-600">Step 2</h1>
          <h1 className="text-xl font-bold">REVIEW HOUSES</h1>
        </div>

        <div className="ml-[250px]">
          <h1 className="text-xl font-bold text-red-600">Step 3</h1>
          <h1 className="text-xl font-bold">
            CONTACT AGENT OR LANDLORD FOR VIEWING
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
