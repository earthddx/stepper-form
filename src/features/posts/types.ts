import { z } from "zod";

import type { postSchema } from "./schema";

export type PostFormData = z.infer<typeof postSchema>;

export type Post = PostFormData & { id: number; createdAt: string };
