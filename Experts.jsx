import React from "react";
import laptop from "../assets/images/loptop.svg";

export default function Experts() {
  return (
    <>
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 my-10 p-2">
        <div className="col-span-1 w-[80%]">
          <img src={laptop} />
        </div>
        <div className="col-span-1 flex flex-col justify-center">
          <h1 className="text-green-400 font-bold my-3">Learn From Experts</h1>
          <p className="my-3 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
            doloribus eos. Sunt modi facilis nam! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Praesentium, dolor.
          </p>
            <button className="bg-black text-white rounded p-3 lg:w-[20%] w-[40%]">Get Started</button>
        </div>
      </div>
    </>
  );
}
