"use client";
import { RootState } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { LuUser2 } from "react-icons/lu";
import { PiArticle } from "react-icons/pi";
import {
  PiShareNetwork,
  PiBriefcase,
  PiGraduationCap,
  PiCompassTool,
  PiTranslate,
  PiMedal,
  PiCertificate,
  PiGameController,
  PiHandHeart,
  PiPuzzlePiece,
  PiBooks,
  PiUsers,
} from "react-icons/pi";
import { useSelector } from "react-redux";

type Props = {
  containerRef: React.RefObject<HTMLDivElement> | null;
};

const Sidebar = ({ containerRef }: Props) => {
  const scrollIntoView = (selector: string) => {
    const section = containerRef?.current?.querySelector(selector);

    section?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <div className="overflow-y-hidden w-12 pr-2">
      <div className="flex justify-center items-center  px-3 md:px-0.5">
        <Image src="/logo.svg" alt="" className="pt-4" width={60} height={60} />
      </div>

      <div
        className=" flex h-[calc(100vh-80px)] flex-col justify-center items-center overflow-y-auto scrollablearea"
        style={{ overflowY: "hidden" }}
      >
        <div
          className="flex items-center justify-center  my-5"
          onClick={() => scrollIntoView("#ananta")}
        >
          <div className="tooltip tooltip-right absolute" data-tip="Basics">
            <LuUser2 />
          </div>
        </div>
        <div
          className="flex items-center justify-center  my-5"
          onClick={() => scrollIntoView("#summary")}
        >
          <div className="tooltip tooltip-right absolute" data-tip="Summary">
            <PiArticle />
          </div>
        </div>
        <div
          className="flex items-center justify-center  my-5"
          onClick={() => scrollIntoView("#profiles")}
        >
          <div className="tooltip tooltip-right absolute" data-tip="Profile">
            <PiShareNetwork />
          </div>
        </div>
        <div
          className="flex items-center justify-center  my-5"
          onClick={() => scrollIntoView("#profiles")}
        >
          <div className="tooltip tooltip-right absolute" data-tip="Experience">
            <PiBriefcase />
          </div>
        </div>
        <div
          className="flex items-center justify-center  my-5"
          onClick={() => scrollIntoView("#educations")}
        >
          <div className="tooltip tooltip-right absolute" data-tip="Education">
            <PiGraduationCap />
          </div>
        </div>
        <div
          className="flex items-center justify-center  my-5"
          onClick={() => scrollIntoView("#skills")}
        >
          <div className="tooltip tooltip-right absolute" data-tip="Skills">
            <PiCompassTool />
          </div>
        </div>
        <div
          className="flex items-center justify-center  my-5"
          onClick={() => scrollIntoView("#languages")}
        >
          <div className="tooltip tooltip-right absolute" data-tip="Languages">
            <PiTranslate />
          </div>
        </div>
        <div
          className="flex items-center justify-center  my-5"
          onClick={() => scrollIntoView("#awards")}
        >
          <div className="tooltip tooltip-right absolute" data-tip="Awards">
            <PiMedal />
          </div>
        </div>
        <div
          className="flex items-center justify-center  my-5"
          onClick={() => scrollIntoView("#certifications")}
        >
          <div
            className="tooltip tooltip-right absolute"
            data-tip="Certifications"
          >
            <PiCertificate />
          </div>
        </div>
        <div
          className="flex items-center justify-center  my-5"
          onClick={() => scrollIntoView("#interests")}
        >
          <div className="tooltip tooltip-right absolute" data-tip="Interests">
            <PiGameController />
          </div>
        </div>
        <div
          className="flex items-center justify-center  my-5"
          onClick={() => scrollIntoView("#projects")}
        >
          <div className="tooltip tooltip-right absolute" data-tip="Projects">
            <PiPuzzlePiece />
          </div>
        </div>
        <div
          className="flex items-center justify-center  my-5"
          onClick={() => scrollIntoView("#publications")}
        >
          <div
            className="tooltip tooltip-right absolute"
            data-tip="Publications"
          >
            <PiBooks />
          </div>
        </div>
        <div
          className="flex items-center justify-center  my-5"
          onClick={() => scrollIntoView("#volunteers")}
        >
          <div
            className="tooltip tooltip-right absolute"
            data-tip="Volunteering"
          >
            <PiHandHeart />
          </div>
        </div>
        <div
          className="flex items-center justify-center  my-5"
          onClick={() => scrollIntoView("#references")}
        >
          <div className="tooltip tooltip-right absolute" data-tip="Refrences">
            <PiUsers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
