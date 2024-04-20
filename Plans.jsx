import React from "react";

export default function Plans() {
  return (
    <>
      <div className="py-24">
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
          <div className="shadow-xl h-[410px] text-center p-6 hover:scale-105 duration-500">
            <h2 className="text-xl font-bold  py-10">Web Development</h2>
            <p className="text-3xl font-bold ">$149</p>
            <p className="my-3">Lorem ipsum dolor sit, amet </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. !</p>
            <p>Lorem ipsum dolor sit amet consectetur a.</p>
            <button className="bg-green-500 text-white rounded px-12 py-3 my-6">
              Start Trial
            </button>
          </div>
          <div className="shadow-xl h-[410px] text-center p-6 bg-gray-100 hover:scale-105 duration-500">
            <h2 className="text-xl font-bold  py-10">Digital Marketing</h2>
            <p className="text-3xl font-bold ">$149</p>
            <p className="my-3">Lorem ipsum dolor sit, amet </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. !</p>
            <p>Lorem ipsum dolor sit amet consectetur a.</p>
            <button className="bg-black text-green-500 rounded px-12 py-3 my-6">
              Start Trial
            </button>
          </div>
          <div className="shadow-xl h-[410px] text-center p-6 hover:scale-105 duration-500">
            <h2 className="text-xl font-bold  py-10">App Development</h2>
            <p className="text-3xl font-bold ">$149</p>
            <p className="my-3">Lorem ipsum dolor sit, amet </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. !</p>
            <p>Lorem ipsum dolor sit amet consectetur a.</p>
            <button className="bg-green-500 text-white rounded px-12 py-3 my-6">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
