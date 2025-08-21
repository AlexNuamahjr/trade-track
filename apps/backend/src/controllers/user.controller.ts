import {Request, Response} from "express";
import { errorResponse, successResponse } from "../utils";
import { StatusCodes } from "http-status-codes";
import { CreateUserInput } from "../validators/user.validator";
import { createUserService } from "../services";



export const registerUser = async (req: Request, res: Response) => {
    try {
        const userData: CreateUserInput = req.body;
        const {user, tempPassword} = await createUserService(userData);

        return successResponse(res, StatusCodes.CREATED, "User created successfully. Temporary password generated.", {
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                mustResetPassword: true
            },
            tempPassword
        })

    } catch (error) {
        errorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, "Internal server error", {error});
    }
}
