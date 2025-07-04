import { z } from "zod";
import { defaultUrl, urlSchema } from "./url";

export const MetaDataSchema = z.object({
  template: z.string().default("everest"),
  font: z.string().default("roboto"),
});

export type Metatdata = z.infer<typeof MetaDataSchema>;

export const defaultMetadata: Metatdata = {
  template: "everest",
  font: "roboto",
};
