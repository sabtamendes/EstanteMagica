import { getBook, postBook } from "@/controllers/book-controller";
import { Router } from "express";
import { validateBody, validateParams } from "@/middlewares";
import { createBookSchema, magicCodeSchema } from "@/schemas";
import Joi from "joi";

const bookRouter = Router();

bookRouter
  .post("/", validateBody(createBookSchema), postBook)
  .get("/", validateParams(magicCodeSchema), getBook);

export { bookRouter };
