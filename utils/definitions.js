import { z } from "zod";


export const TaskSchema = z.object({
    content: z
    .string()
    .min(5, "content must be atleast 5 characters long")
    .trim()
})