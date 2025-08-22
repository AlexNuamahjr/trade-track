import {PrismaClient} from "../src/generated/prisma";;
import dotEnv from "dotenv";
dotEnv.config();
import {ENV} from "../src/config/env.config"
import bcrypt from "bcrypt";


const prisma = new PrismaClient()

async function main(){
    try {
        const email = "admin@local.test";
        const password = process.env.ADMIN_PASSWORD;
        const salt = ENV.SALT_ROUNDS;
        const isEmailExists = await prisma.user.findUnique({where: {email}});
        if (!isEmailExists){
            if (!password) {
                throw new Error("ADMIN_PASSWORD environment variable is not set.");
            }
            const hashPassword = await bcrypt.hash(password, salt);
            await prisma.user.create({
            data: {
                email,
                name: "System Admin",
                password: hashPassword,
                role: "ADMIN",
            }
            });
            console.log("Admin seeded successfully");
        }else {
            console.log("Admin already exists")
        }
        
    } catch (error) {
        console.error(error)
    } finally {
        await prisma.$disconnect();
    }
}

main()
  .catch((err) => {
    console.error("❌ Seed failed", err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

