"use client";
import { Sections } from "@/schema/sections";
import React from "react";
import {
  PiCertificate,
  PiGraduationCap,
  PiMedal,
  PiShareNetwork,
  PiUsers,
  PiHandHeart,
  PiBriefcase,
  PiCompassTool,
  PiTranslate,
  PiGameController,
  PiPuzzlePiece,
  PiBooks,
} from "react-icons/pi";

type Props = {
  id: keyof Sections;
};

const sectionIcons = (id: string) => {
  switch (id) {
    // Left Sidebar

    case "awards":
      return <PiMedal size={18} />;
    case "profiles":
      return <PiShareNetwork size={18} />;
    case "certifications":
      return <PiCertificate size={18} />;
    case "educations":
      return <PiGraduationCap size={18} />;
    case "references":
      return <PiUsers size={18} />;
    case "volunteers":
      return <PiHandHeart size={18} />;
    case "experiences":
      return <PiBriefcase size={18} />;
    case "skills":
      return <PiCompassTool size={18} />;
    case "languages":
      return <PiTranslate size={18} />;
    case "interests":
      return <PiGameController size={18} />;
    case "projects":
      return <PiPuzzlePiece size={18} />;
    case "publications":
      return <PiBooks size={18} />;
    default:
      return null;
  }
};
function GetSectionIcon({ id }: Props) {
  return <div>{sectionIcons(id)}</div>;
}

export default GetSectionIcon;
