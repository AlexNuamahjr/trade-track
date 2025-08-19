import { StatusCodes } from "http-status-codes";
import { Response } from "express";

export const successResponse = (
  res: Response,
  statusCode: StatusCodes,
  message: string,
  data: any = {},
  token?: string
) => {
  const response: any = {
    status: "success",
    data,
    message,
  };
  if (token) response.token = token;
  return res.status(statusCode).json(response);
};

export const errorResponse = (
  res: Response,
  statusCode: StatusCodes,
  message: string,
  errors: any = {}
) => {
    const response: any = {
        status: "error",
        message,
        errors: errors?.errors || errors
    }
    return res.status(statusCode).json(response)
};
