// middlewares/rbac.ts
import { Request, Response, NextFunction } from "express";
import { Role } from "../generated/prisma";
import { errorResponse } from "../utils";
import { StatusCodes } from "http-status-codes";
import { error } from "console";

export const rbac =
  (allowedRoles: Role[], restrictAdminCreation = false) =>
  (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role as Role;

    if (!userRole) {
      return errorResponse(res, StatusCodes.FORBIDDEN, "Role not found in token", {error});
    }

    // Check if current user role is allowed
    if (!allowedRoles.includes(userRole)) {
      return errorResponse(res, StatusCodes.FORBIDDEN, "Access Denied", {error});
    }

    // Only ADMIN can assign ADMIN
    if (restrictAdminCreation && req.body.role === Role.ADMIN) {
      if (userRole !== Role.ADMIN) {
        return res
          .status(403)
          .json({ message: "Only Admin can assign Admin role" });
      }
    }
    next();
  };
