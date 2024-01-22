import { z } from "zod";
import { ProfileSchema } from "./profile";
import { FilterKeys } from "@/app/utils/type";
import { basicsSchema, defaultBasics } from "./basics";
import { sectionDefault, sectionsSchema } from "./sections";

// Define the schema for sections
export const resumeDataSchema = z.object({
  basics: basicsSchema,
  sections: sectionsSchema,
});

export type ResumeData = z.infer<typeof resumeDataSchema>;
export type Sections = z.infer<typeof sectionsSchema>;
export type SectionKey = "basics" | keyof Sections | `custom.${string}`;
export type SectionWithItem<T = unknown> = Sections[FilterKeys<
  Sections,
  { items: T[] }
>];
export type SectionItem = SectionWithItem["items"][number];

export const defaultResumeData: ResumeData = {
  basics: defaultBasics,
  sections: sectionDefault,
};
