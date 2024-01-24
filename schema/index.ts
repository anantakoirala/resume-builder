import { z } from "zod";
import { ProfileSchema } from "./profile";
import { FilterKeys } from "@/app/utils/type";
import { basicsSchema, defaultBasics } from "./basics";
import { sectionDefault, sectionsSchema } from "./sections";
import { defaultSummary, summarySchema } from "./sections/summary";

// Define the schema for sections
export const resumeDataSchema = z.object({
  basics: basicsSchema,
  summary: summarySchema,
  sections: sectionsSchema,
});

export type ResumeData = z.infer<typeof resumeDataSchema>;
export type Sections = z.infer<typeof sectionsSchema>;

export const defaultResumeData: ResumeData = {
  basics: defaultBasics,
  summary: defaultSummary,
  sections: sectionDefault,
};
