import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div className="bg-[#2699fb] p-10">
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-5 gap-14">
          <div className="col-span-2">
            <h3 className="text-4xl font-bold">Umair Maqsood</h3>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              voluptate minima illum possimus mollitia ad modi.
            </p>
            <div className="flex justify-start items-center gap-20 text-2xl text-white rounded mt-3">
              <AiFillFacebook />
              <AiOutlineInstagram />
              <AiOutlineTwitter />
              <AiFillLinkedin />
            </div>
          </div>
          <div>
            <p className="text-xl font-bold mb-4">Solutions</p>
            <ul className="text-white">
              <li className="mb-4">Analytic</li>
              <li className="mb-4">Community</li>
              <li className="mb-4">Problems</li>
              <li className="mb-4">Development</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold mb-4">Support</p>
            <ul className="text-white">
              <li className="mb-4">Pricing</li>
              <li className="mb-4">Documentation</li>
              <li className="mb-4">Guidness</li>
              <li className="mb-4">API Solution</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-bold mb-4">Company</p>
            <ul className="text-white">
              <li className="mb-4">About</li>
              <li className="mb-4">Blogs</li>
              <li className="mb-4">Jobs</li>
              <li className="mb-4">Prices</li>
            </ul>
          </div>

          
        </div>
      </div>
    </>
  );
}
