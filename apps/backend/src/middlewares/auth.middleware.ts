import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { errorResponse } from "../utils";
import { StatusCodes } from "http-status-codes";
import { error } from "console";
import { Role } from "../generated/prisma";

interface JwtPayload {
  userId: string;
  role: Role;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return errorResponse(res, StatusCodes.UNAUTHORIZED, "No token provided", {error})
  }

  try {
    const secret = process.env.JWT_SECRET as string;
    const decoded = jwt.verify(token, secret) as JwtPayload;

    req.user = {
      id: decoded.userId,
      role: decoded.role,
    };

    next();
  } catch (error) {
    return errorResponse(res, StatusCodes.UNAUTHORIZED, "Invalid or expired token", {error})
  }
};
