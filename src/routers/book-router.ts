import { getBook, postBook } from "@/controllers/book-controller";
import { Router } from "express";
import { validateBody } from "@/middlewares";
import { createBookSchema } from "@/schemas";

const bookRouter = Router();

bookRouter
  .post("/", validateBody(createBookSchema), postBook)
  .get("/", getBook); //vou trazer pelo body como Magic Code
  // .get("/:magicCode", getBook);

export { bookRouter };
