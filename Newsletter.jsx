import React from "react";

export default function Newsletter() {
  return (
    <>
      <div className="bg-[#2699fb] p-4">
        <div className="md:grid grid-cols-2 gap-20 py-[20px]">
          <div className="m-2">
            <h1 className="text-3xl md:text-[40px] font-bold text-white">
              Want to Learn Latest I.T Skills
            </h1>
            <span className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi?
            </span>
          </div>
          <div className="m-2">
            <input
              type="text"
              className="py-3 text-slate-400 mx-2 outline-none rounded p-2 mb-2"
              placeholder="Email"
            />
            <button className="bg-black text-white rounded px-8 py-3">
              Get Started
            </button>
            <br />
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur <br /> Privecy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
