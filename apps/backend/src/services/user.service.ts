import { PrismaClient } from "@prisma/client";
import { CreateUserInput } from "../validators/user.validator";

const prisma = new PrismaClient();

export const createUser = async (userData: CreateUserInput) => {
  try {
    const user = await prisma.user.create({
      data: userData,
    });
    return user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to create user: ${error.message}`);
    }
    throw new Error("Failed to create user: Unknown error");
  }
}

export const findUserByEmail = async (email: string) => {
    return await prisma.findUnique({where: {email}})
}
