import { PrismaClient } from "../generated/prisma";
import { CreateUserInput } from "../validators/user.validator";
import { generateHash, generateTemPassword } from "../utils/password.util";

const prisma = new PrismaClient();

export const createUserService = async (userData: CreateUserInput) => {
  try {
    // generate temp password
    const tempPassword = generateTemPassword();
    // hash temp password
    const hashedPassword = await generateHash(tempPassword);
    // create user
    const user = await prisma.user.create({
      data: { ...userData, password: hashedPassword, mustResetPassword: true },
    });
    return { user, tempPassword };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to create user: ${error.message}`);
    }
    throw new Error("Failed to create user: Unknown error");
  } finally {
    await prisma.$disconnect();
  }
};

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};
