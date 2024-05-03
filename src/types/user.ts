import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  phoneNumber: z.string(),
  imagesUrls: z.array(z.string()),
  role: z.enum(["user", "admin"]),
});

export type User = z.infer<typeof UserSchema>;
