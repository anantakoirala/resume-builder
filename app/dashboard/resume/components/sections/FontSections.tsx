"use client";
import React from "react";
import { PiDiamondsFour } from "react-icons/pi";
import { fontsList } from "@/app/utils/getFontList";
import { useDispatch, useSelector } from "react-redux";
import { setBasicSection } from "@/redux/resume/resumeSlice";
import { RootState } from "@/redux/store";

type Props = {};

const FontSections = (props: Props) => {
  const { resume } = useSelector((state: RootState) => state.resume);
  const dispatch = useDispatch();
  const setFont = (fontName: string) => {
    dispatch(setBasicSection({ path: "metadata.font", value: fontName }));
  };
  return (
    <div className="mb-5">
      <header className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-x-4">
          <PiDiamondsFour size={25} />
          <h2 className="line-clamp-1 text-3xl font-bold ">Fonts</h2>
        </div>
      </header>
      <div className="grid grid-cols-2 gap-1">
        {/* <!-- Example images --> */}
        {fontsList.map((font, index) => (
          <div
            className={` h-10  flex flex-row items-center rounded-sm text-sm cursor-pointer hover:bg-gray-200 justify-center border ${
              font.name === resume.data.metadata.font ? "border-black" : ""
            } `}
            style={{ fontFamily: font.name }}
            key={index}
            onClick={() => setFont(font.name)}
          >
            {font.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FontSections;
