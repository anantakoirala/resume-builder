import { z } from "zod";
import { ProfileSchema } from "./profile";

export const profileSectionSchema = z.object({
  name: z.string(),
  items: z.array(ProfileSchema),
});

export type ProfileSection = z.infer<typeof profileSectionSchema>;
