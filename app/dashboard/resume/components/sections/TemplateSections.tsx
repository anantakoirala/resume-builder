"use client";
import { templatesList } from "@/app/utils/templateList";
import { setBasicSection } from "@/redux/resume/resumeSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { PiDiamondsFour } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const TemplateSections = (props: Props) => {
  const { resume } = useSelector((state: RootState) => state.resume);
  const dispatch = useDispatch();
  const setTemplate = (templateName: string) => {
    console.log(templateName);
    dispatch(
      setBasicSection({ path: "metadata.template", value: templateName })
    );
  };
  return (
    <div className="">
      <header className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-x-4">
          <PiDiamondsFour size={25} />
          <h2 className="line-clamp-1 text-3xl font-bold">Templates</h2>
        </div>
      </header>
      <div className="grid grid-cols-2 gap-1">
        {/* <!-- Example images --> */}

        {templatesList.map((template: string, index: number) => (
          <div
            className={`${
              resume.data.metadata.template === template
                ? "border-2 border-black"
                : ""
            }`}
            key={index}
            onClick={() => setTemplate(template)}
          >
            <img
              src={`/templates/${template}.png`}
              className="w-full h-auto object-contain"
              alt={template}
            />
            {/* <div className="absolute inset-y-0 bg-gradient-to-b from-transparent to-gray-700 w-full opacity-10"></div> */}
          </div>
        ))}
      </div>
      {/* <div classNameName="grid grid-cols-2  gap-y-2 gap-x-1">
        <div classNameName="bg-purple-300 aspect-[1/1.4142]">
          <img
            classNameName="object-cover  w-full h-full"
            src={`/templates/everest3.png`}
            alt="aa"
          />
        </div>
        <div classNameName="bg-purple-300 aspect-[1/1.4142]">
          <img
            classNameName="object-cover  w-full h-full"
            src={`/templates/annapurna2.png`}
            alt="aa"
          />
        </div>
        <div classNameName="bg-purple-300 aspect-[1/1.4142]">
          <img
            classNameName="object-cover  "
            src={`/templates/template1.png`}
            alt="aa"
          />
        </div>
        <div classNameName="bg-purple-300 aspect-[1/1.4142] border-[2px]  border-black ">
          <img
            classNameName="object-cover  "
            src={`/templates/annapurna.png`}
            alt="aa"
          />
        </div>
        <div classNameName="bg-purple-300 aspect-[1/1.4142]">
          <img
            classNameName="object-cover  "
            src={`/templates/template1.png`}
            alt="aa"
          />
        </div>
        <div classNameName="bg-purple-300 aspect-[1/1.4142]">
          <img
            classNameName="object-cover  "
            src={`/templates/template1.png`}
            alt="aa"
          />
        </div>
        <div classNameName="bg-purple-300 aspect-[1/1.4142]">
          <img
            classNameName="object-cover  "
            src={`/templates/template1.png`}
            alt="aa"
          />
        </div>
      </div> */}
    </div>
  );
};

export default TemplateSections;
