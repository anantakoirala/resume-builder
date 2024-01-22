"use client";
import React, { useRef } from "react";
import Avatar from "../components/template/components/Avatar";
import Summary from "../dashboard/resume/components/sections/summary";

const Page: React.FC = () => {
  const targetElementRef = useRef<HTMLDivElement>(null);

  const scrollToTarget = () => {
    targetElementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex justify-center content-center">
        <Summary />
        {/* <div className="border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-4/5 mt-10 mb-10">
          <header>
            <ul className="flex flex-wrap justify-end gap-2">
              <li>
                <a
                  href=""
                  className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                >
                  <Avatar src="https://cdn.simpleicons.org/facebook" />
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                >
                  <Avatar src="https://cdn.simpleicons.org/facebook" />
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                >
                  <Avatar src="https://cdn.simpleicons.org/facebook" />
                </a>
              </li>
            </ul>
            <div className="flex justify-between items-center">
              <div>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="grid justify-items-end">
                <h1 className="text-7xl font-extrabold">DAHYE JI</h1>
                <p className="text-xl mt-5">Aspiring Front-End Developer</p>
              </div>
            </div>
          </header>
        </div> */}
      </div>
    </>
  );
};

export default Page;
