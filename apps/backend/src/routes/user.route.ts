import express from "express";
import { validate } from "../middlewares/validate.middleware";
import { userValidationSchema } from "../validators/user.validator";
import { registerUser } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.post("/create-user", validate(userValidationSchema as any), registerUser);

export { userRouter };
