"use client";
import React, { forwardRef } from "react";
import { LuUser2 } from "react-icons/lu";
import Basic from "./sections/Basic";
import Seperator from "@/app/components/seperator";
import Summary from "./sections/summary";
import { useHideScrollbar } from "@/app/utils/hideScrollbar";
import SectionBase from "./SectionBase";
import { Profile } from "@/schema/profile";
import { Award } from "@/schema/sections/award";
import { Certification } from "@/schema/sections/certification";
import { Education } from "@/schema/sections/education";
import { Refrence } from "@/schema/sections/refrence";
import { Volunteer } from "@/schema/sections/volunteer";
import { Experience } from "@/schema/sections/experience";
import { Skill } from "@/schema/sections/skill";
import { Language } from "@/schema/sections/language";
import { Interest } from "@/schema/sections/interest";
import { Project } from "@/schema/sections/project";
import { Publication } from "@/schema/sections/publication";

type Props = {
  containerRef: React.RefObject<HTMLDivElement> | null;
};

const ContentFields = React.forwardRef(({ containerRef }: Props, ref) => {
  return (
    <div
      className="flex flex-col flex-1 py-6 px-2 h-screen  no-scrollbar overflow-y-auto"
      ref={containerRef}
    >
      <Basic />
      <Seperator />
      <Summary />
      <Seperator />
      <SectionBase<Certification>
        id="certifications"
        title={(item) => item.name}
        description={(item) => item.issuer}
      />
      <Seperator />
      <SectionBase<Profile>
        id="profiles"
        title={(item) => item.network}
        description={(item) => item.username}
      />
      <Seperator />
      <SectionBase<Experience>
        id="experiences"
        title={(item) => item.company}
        description={(item) => item.position}
      />
      <Seperator />
      <SectionBase<Skill>
        id="skills"
        title={(item) => item.name}
        description={(item) => {
          if (item.description) return item.description;
          if (item.keywords.length > 0)
            return `${item.keywords.length} keywords`;
        }}
      />
      <Seperator />
      <SectionBase<Education>
        id="educations"
        title={(item) => item.institution}
        description={(item) => item.area}
      />
      <Seperator />
      <SectionBase<Language>
        id="languages"
        title={(item) => item.name}
        description={(item) => item.description}
      />
      <Seperator />
      <SectionBase<Interest>
        id="interests"
        title={(item) => item.name}
        description={(item) => {
          if (item.keywords.length > 0)
            return `${item.keywords.length} keywords`;
        }}
      />
      <Seperator />
      <SectionBase<Project>
        id="projects"
        title={(item) => item.name}
        description={(item) => item.description}
      />
      <Seperator />
      <SectionBase<Publication>
        id="publications"
        title={(item) => item.name}
        description={(item) => item.publisher}
      />
      <Seperator />
      <SectionBase<Award>
        id="awards"
        title={(item) => item.title}
        description={(item) => item.awarder}
      />
      <Seperator />

      <SectionBase<Volunteer>
        id="volunteers"
        title={(item) => item.organization}
        description={(item) => item.position}
      />
      <Seperator />
      <SectionBase<Refrence>
        id="references"
        title={(item) => item.name}
        description={(item) => item.description}
      />
    </div>
    // <div className="min-h-screen h-screen overflow-y-hidden">
    //   <div className="flex flex-col overflow-y-auto h-[calc(100vh-50px)]"></div>
    // </div>
  );
});

ContentFields.displayName = "ContentFields";

export default ContentFields;
