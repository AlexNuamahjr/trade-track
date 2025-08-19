import z from "zod";

export const UserValidator = z.object({
  email: z.email("Invalid email format").max(255),
  name: z.string().min(4).max(255),
  password: z.string().min(8).max(255),
  role: z.enum(["CASHIER", "MANAGER", "ADMIN"]),
  storeId: z.string().optional(),
});

export type CreateUserInput = z.infer<typeof UserValidator>;