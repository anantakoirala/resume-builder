import { kebabCase } from "@/utils/string";
import { z } from "zod";

const kebabCaseTransformer = (val: string) => {
  console.log("val", kebabCase(val));
  if (!kebabCase(val)) {
    throw new Error("Slug must be in kebab case");
  }

  return kebabCase(val);
};
export const createResumeSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1).refine(kebabCaseTransformer),
  visibility: z.enum(["public", "private"]).default("private"),
});

export type createResume = z.infer<typeof createResumeSchema>;
