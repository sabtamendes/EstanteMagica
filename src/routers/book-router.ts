import { getBook, postBook } from "@/controllers/book-controller";
import { Router } from "express";
import { validateBody } from "@/middlewares";
import { createBookSchema } from "@/schemas";

const bookRouter = Router();

bookRouter
  .post("/", validateBody(createBookSchema), postBook)
  .get("/:magicCode", getBook);

export { bookRouter };
