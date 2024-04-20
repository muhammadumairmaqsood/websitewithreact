import React from "react";
import { ReactTyped } from "react-typed";

export default function Banner() {
  return (
    <>
      <div className="bg-[#2699fb] w-full py-[100px]">
        <div className="max-w-[1240px] mx-auto text-center font-bold my-[60px]">
          <div className=" text 2xl md:text-4xl md:p-[24px]">Learn with us</div>
          <h2 className="text-4xl md:text-[70px] text-white md:p-[24px]">
            Grow with us.
          </h2>
          <div className="text-3xl md:text-[50px] text-white md:p-[24px]">
            Learn
            <ReactTyped className="pl-2"
              strings={[
                "Web Development",
                "Digital Marketing",
                "Ethical Hacking",
              ]}
              typeSpeed={80}
              backSpeed={50}
              loop={true}
            />
          </div>
          <button className="bg-black text-white rounded px-8 py-3">Get Started</button>
        </div>
      </div>
    </>
  );
}
