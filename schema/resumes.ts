import { z } from "zod";

const resumesSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Resumes = z.infer<typeof resumesSchema>;
