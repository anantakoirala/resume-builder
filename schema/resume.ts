import { z } from "zod";
import { defaultResumeData, resumeDataSchema } from ".";

const ResumeSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  data: resumeDataSchema.default(defaultResumeData),
  visibility: z.enum(["private", "public"]).default("private"),
  locked: z.boolean().default(false),
  userId: z.string(),

  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Resume = z.infer<typeof ResumeSchema>;
export type DataValue = z.infer<typeof resumeDataSchema>;

export const DefaultResumeData: Resume = {
  id: "",
  title: "",
  slug: "",
  data: defaultResumeData,
  visibility: "private",
  locked: false,
  userId: "",
  updatedAt: "",
  createdAt: "",
};
