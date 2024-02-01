"use client";
import { RootState } from "@/redux/store";
import React, { useEffect } from "react";
import { LuUser2 } from "react-icons/lu";
import { PiAperture } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { setBasicSection } from "@/redux/resume/resumeSlice";

type Props = {};

function Basic({}: Props) {
  const { resume } = useSelector((state: RootState) => state.resume);
  const dispatch = useDispatch();

  const setBasicSectionData = (path: string, value: string) => {
    const response = dispatch(setBasicSection({ path, value }));

    console.log(response);
  };

  return (
    <div className="">
      <header className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-x-4">
          <LuUser2 size={25} />
          <h2 className="line-clamp-1 text-3xl font-bold">Basics</h2>
        </div>
      </header>

      <div className="flex flex-col gap-3">
        <div className="flex flex-row lg:justify-center lg:items-center gap-1">
          <div className="flex flex-col justify-center items-center w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-green-100 rounded-full">
            image
          </div>
          <div className="flex flex-col justify-evenly ml-1">
            <label className="text-md leading-none">picture</label>
            <div className="flex flex-row gap-2 items-center">
              <input
                type="text"
                className="w-full h-7 lg:h-9 rounded  border border-black px-3  focus:border-indigo-600 focus:outline-none"
              />
              <div className=" w-8 h-9 p-1 flex items-center justify-center rounded-sm transition duration-300 hover:bg-gray-300">
                <PiAperture />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-md  leading-none">Full Name</label>
          <input
            type="text"
            className="w-full h-7 lg:h-9 rounded  border border-black px-3  focus:border-indigo-600 focus:outline-none"
            onChange={(e) => setBasicSectionData("basics.name", e.target.value)}
            value={resume?.data.basics.name}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-md  leading-none">Headline</label>
          <input
            type="text"
            className="w-full h-7 lg:h-9 rounded  border border-black px-3  focus:border-indigo-600 focus:outline-none"
            onChange={(e) =>
              setBasicSectionData("basics.headline", e.target.value)
            }
            value={resume?.data.basics.headline}
          />
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-md  leading-none">Email</label>
            <input
              type="text"
              className="w-full h-7 lg:h-9 rounded  border border-black px-3  focus:border-indigo-600 focus:outline-none"
              onChange={(e) =>
                setBasicSectionData("basics.email", e.target.value)
              }
              value={resume?.data.basics.email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-md  leading-none">Website</label>
            <input
              type="text"
              className="w-full h-7 lg:h-9 rounded  border border-black px-3  focus:border-indigo-600 focus:outline-none"
              onChange={(e) =>
                setBasicSectionData("basics.url.href", e.target.value)
              }
              value={resume?.data.basics.url.href}
            />
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-md  leading-none">Phone</label>
            <input
              type="text"
              className="w-full h-7 lg:h-9 rounded  border border-black px-3  focus:border-indigo-600 focus:outline-none"
              onChange={(e) =>
                setBasicSectionData("basics.phone", e.target.value)
              }
              value={resume?.data.basics.phone}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-md  leading-none">Location</label>
            <input
              type="text"
              className="w-full h-7 lg:h-9 rounded  border border-black px-3  focus:border-indigo-600 focus:outline-none"
              onChange={(e) =>
                setBasicSectionData("basics.location", e.target.value)
              }
              value={resume?.data.basics.location}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basic;
