import CreateResumeModal from "@/app/dashboard/resume/components/CreateResumeModal";
import ProfileModal from "@/app/dashboard/resume/components/ProfileModal";
import { closeModal } from "@/redux/modal/modalSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { Profile } from "@/schema/profile";
import AwardModal from "@/app/dashboard/resume/components/AwardModal";
import EducationModal from "@/app/dashboard/resume/components/EducationModal";
import CertificationModal from "@/app/dashboard/resume/components/CertificationModal";
import RefrenceModal from "@/app/dashboard/resume/components/RefrenceModal";
import ExperienceModal from "@/app/dashboard/resume/components/ExperienceModal";
import LanguageModal from "@/app/dashboard/resume/components/LanguageModal";
import PublicationModal from "@/app/dashboard/resume/components/PublicationModal";
import VolunteerModal from "@/app/dashboard/resume/components/VolunteerModal";
import SkillModal from "@/app/dashboard/resume/components/SkillModal";
import InterestModal from "@/app/dashboard/resume/components/InterestModal";
import ProjectModal from "@/app/dashboard/resume/components/ProjectModal";
type Props = {
  children: React.ReactNode;
};

function ModalProvider({ children }: Props) {
  const { name, mode } = useSelector((state: RootState) => state.modal);

  return (
    <>
      {children}
      <CreateResumeModal />
      {name === "profiles" && <ProfileModal id="profiles" />}
      {name === "experiences" && <ExperienceModal id="experiences" />}

      <AwardModal id="awards" />
      {name === "educations" && <EducationModal id="educations" />}
      {name === "certifications" && <CertificationModal id="certifications" />}
      {name === "languages" && <LanguageModal id="languages" />}
      {name === "publications" && <PublicationModal id="publications" />}
      {name === "volunteers" && <VolunteerModal id="volunteers" />}
      {name === "references" && <RefrenceModal id="references" />}
      {name === "skills" && <SkillModal id="skills" />}
      {name === "interests" && <InterestModal id="interests" />}
      {name === "projects" && <ProjectModal id="projects" />}
    </>
  );
}

export default ModalProvider;
