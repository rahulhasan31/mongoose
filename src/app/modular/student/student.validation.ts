import { z } from "zod";

// Define the Zod schema
export const studentSchema = z.object({
  id: z.string().trim(),
  name: z.object({
    firstName: z
      .string()
      .trim()
      .regex(/^[A-Za-z]+$/, {
        message: "{VALUE} is not valid",
      }),
    lastName: z.string().trim(),
  }),
  gender: z.enum(["male", "female", "others"]),
  address: z.string().trim(),
  number: z.number(),
  bloodGroup: z.string().trim().optional(),
  email: z.string().trim().email({
    message: "{VALUE} is not a valid email",
  }),
  avatar: z.string().trim().optional(),
});
