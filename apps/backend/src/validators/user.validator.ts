import z from "zod";

export const userValidationSchema = z.object({
  email: z.email("Invalid email format").max(255),
  name: z.string("email is required").min(4).max(255),
  role: z.enum(["CASHIER", "MANAGER", "ADMIN"]).default("CASHIER"),
  storeId: z.string().optional(),
  temporaryPassword: z.string().min(6)
});

export type CreateUserInput = z.infer<typeof userValidationSchema>;