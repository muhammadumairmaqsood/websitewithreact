import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [toggle, settoggle] = useState(false);
  return (
    <>
      <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1240px] flex justify-between items-center py-3">
          <div className="text-3xl font-bold">Umair Maqsood</div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => settoggle(!toggle)}
              className="text-white text-3x md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => settoggle(!toggle)}
              className="text-white text-3x md:hidden block"
            />
          )}

          <ul className="hidden md:flex gap-5 text-white">
            <li>Home</li>
            <li>Resources</li>
            <li>Services</li>
            <li>Customers</li>
            <li>Contact Us</li>
          </ul>
          {/* Responsive menu */}
          <ul
            className={`md:hidden w-full text-white fixed bg-black 
          ${toggle ? "left-[0%]" : "left-[-100%] "}
          top-[92px] h-screen duration-300`}
          >
            <li className="p-5">Home</li>
            <li className="p-5">Resources</li>
            <li className="p-5">Services</li>
            <li className="p-5">Customers</li>
            <li className="p-5">Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
}
