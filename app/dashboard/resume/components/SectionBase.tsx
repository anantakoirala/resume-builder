"use client";
import GetSectionIcon from "@/app/utils/getSectionIcon";
import { openModal } from "@/redux/modal/modalSlice";
import { getSections } from "@/redux/resume/resumeSlice";
import { RootState } from "@/redux/store";
import { Sections, sectionsSchema } from "@/schema/sections";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PiPlus } from "react-icons/pi";

import MenuContext from "./MenuContext";
import ContextMenu from "./ContextMenu";

interface SectionProps<T> {
  id: keyof Sections;
  title: (item: T) => string;
  description?: (item: T) => string | undefined;
}

function SectionBase<T>({ id, title, description }: SectionProps<T>) {
  const [contextMenuState, setContextMenuState] = useState({
    clicked: false,
    points: { x: 0, y: 0 },
    itemId: "",
  });

  const dispatch = useDispatch();
  const { resume } = useSelector((state: RootState) => state.resume);

  const data = Object.keys(resume.data.sections).filter((key) => key === id);
  useEffect(() => {
    const handleClick = () =>
      setContextMenuState({
        clicked: false,
        points: { x: 0, y: 0 },
        itemId: "",
      });
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  if (data.length === 0) return false;
  const section = resume.data.sections[id];

  const handleOpen = async (name: string, mode: string) => {
    dispatch(openModal([name, mode, ""]));
  };

  return (
    <div className="flex flex-col mb-5" id={id}>
      <div className="w-full  flex flex-col justify-between gap-y-5">
        <div className="flex flex-row items-center gap-x-4 ">
          <GetSectionIcon id={id} />
          <h2 className="line-clamp-1 text-3xl font-bold">{section.name}</h2>
        </div>
        {/* <div>menu</div> */}
        {/* <MenuContext /> */}
        <div className="mb-4">
          {section.items.map((item, index) => (
            <React.Fragment key={item.id}>
              <div
                className="flex flex-col w-full h-16  border justify-center pl-4 mb-3 cursor-pointer"
                key={index}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setContextMenuState({
                    clicked: true,
                    points: { x: e.pageX, y: e.pageY },
                    itemId: item.id,
                  });
                }}
              >
                <p className="font-medium cursor-pointer">{title(item as T)}</p>
                <p className="cursor-pointer">{description?.(item as T)}</p>
              </div>
              {contextMenuState.clicked && (
                <ContextMenu
                  x={contextMenuState.points.x}
                  y={contextMenuState.points.y}
                  itemId={contextMenuState.itemId}
                  name={id}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div
        className="flex flex-row items-center gap-2 justify-center w-full h-11 bg-gray-100 border cursor-pointer"
        onClick={() => handleOpen(id, "create")}
      >
        <div>
          <PiPlus />
        </div>
        <div>Add new items</div>
      </div>
    </div>
  );
}

export default SectionBase;
