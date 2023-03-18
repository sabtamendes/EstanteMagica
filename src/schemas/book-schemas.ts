import { MagicBook } from "@/protocols";

import Joi from "joi";
import { PageType } from "@prisma/client";

export const createBookSchema = Joi.object<MagicBook>({
  title: Joi.string().min(3).required(),
  author: Joi.string().min(3).required(),
  professor: Joi.string().min(3).required(),
  pages: Joi.array()
    .items(
      Joi.object({
        pageNumber: Joi.number().integer().min(1).max(12).required(),
        pageType: Joi.string().valid(PageType.TEXT, PageType.IMAGE).required(),
        content: Joi.string().required(),
      })
    )
    .required(),
});
