import { z } from "zod";

import { awardSchema } from "./sections/award";
import { educationSchema } from "./sections/education";
import { certificationSchema } from "./sections/certification";
import { interestSchema } from "./sections/interest";
import { projectSchema } from "./sections/project";
import { experienceSchema } from "./sections/experience";
import { skillSchema } from "./sections/skill";
import { languageSchema } from "./sections/language";
import { refrenceSchema } from "./sections/refrence";
import { volunteerSchema } from "./sections/volunteer";
import { publicationSchema } from "./sections/publication";
import { ProfileSchema } from "./profile";
import { FilterKeys } from "@/app/utils/type";

export const sectionsSchema = z.object({
  awards: z.object({
    name: z.string(),
    id: z.literal("awards"),
    items: z.array(awardSchema),
  }),
  certifications: z.object({
    name: z.string(),
    id: z.literal("certifications"),
    items: z.array(certificationSchema),
  }),
  educations: z.object({
    name: z.string(),
    id: z.literal("education"),
    items: z.array(educationSchema),
  }),
  profiles: z.object({
    name: z.string(),
    id: z.literal("profile"),
    items: z.array(ProfileSchema),
  }),
  interests: z.object({
    name: z.string(),
    id: z.literal("interest"),
    items: z.array(interestSchema),
  }),
  projects: z.object({
    name: z.string(),
    id: z.literal("project"),
    items: z.array(projectSchema),
  }),
  publications: z.object({
    name: z.string(),
    id: z.literal("publication"),
    items: z.array(publicationSchema),
  }),
  volunteers: z.object({
    name: z.string(),
    id: z.literal("volunteer"),
    items: z.array(volunteerSchema),
  }),
  references: z.object({
    name: z.string(),
    id: z.literal("reference"),
    items: z.array(refrenceSchema),
  }),
  experiences: z.object({
    name: z.string(),
    id: z.literal("experience"),
    items: z.array(experienceSchema),
  }),
  skills: z.object({
    name: z.string(),
    id: z.literal("skill"),
    items: z.array(skillSchema),
  }),
  languages: z.object({
    name: z.string(),
    id: z.literal("language"),
    items: z.array(languageSchema),
  }),
});

export type Sections = z.infer<typeof sectionsSchema>;
export type SectionWithItem<T = unknown> = Sections[FilterKeys<
  Sections,
  { items: T[] }
>];

export const sectionDefault: Sections = {
  awards: { id: "awards", name: "Awards", items: [] },
  certifications: { id: "certifications", name: "Certifications", items: [] },
  educations: { id: "education", name: "Educations", items: [] },
  profiles: { id: "profile", name: "Profiles", items: [] },
  interests: { id: "interest", name: "Interests", items: [] },
  projects: { id: "project", name: "Projects", items: [] },
  publications: { id: "publication", name: "Publications", items: [] },
  volunteers: { id: "volunteer", name: "Voluntering", items: [] },
  references: { id: "reference", name: "References", items: [] },
  experiences: { id: "experience", name: "Experiences", items: [] },
  skills: { id: "skill", name: "Skills", items: [] },
  languages: { id: "language", name: "Languages", items: [] },
};
