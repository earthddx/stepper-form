import { z } from "zod";

export const CATEGORIES = ["TECH", "DESIGN", "BUSINESS", "OTHER"] as const;

export const postSchema = z.object({
  title: z.string().min(3, "Title needs at least 3 characters"),
  body: z.string().min(10, "Body needs at least 10 characters"),
  category: z.enum(CATEGORIES, { message: "Pick a category" }),
  author: z.string().min(2, "Author name needs at least 2 characters"),
  pinned: z.boolean(),
});
