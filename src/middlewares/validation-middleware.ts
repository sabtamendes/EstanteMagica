import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema, StringSchema } from "joi";
import { invalidDataError } from "@/errors";

export function validateBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema, "body");
}

export function validateParams<T>(schema: ObjectSchema<T> | StringSchema): ValidationMiddleware {
  return validate(schema, "query");
}

function validate(schema: ObjectSchema | StringSchema, type: "body" | "query" | "params") {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], {
      abortEarly: false,
    });

    if (!error) {
      next();
    } else {
      res
        .status(httpStatus.BAD_REQUEST)
        .send(invalidDataError(error.details.map((d) => d.message)));
    }
  };
}

export type ValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
