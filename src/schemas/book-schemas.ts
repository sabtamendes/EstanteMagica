import { MagicBook } from "@/protocols";
import Joi from "joi";
import { PageType } from "@prisma/client";

export const createBookSchema = Joi.object<MagicBook>({
  title: Joi.string().min(3).required(),
  author: Joi.string().min(3).required(),
  professor: Joi.string().min(3).required(),
  pages: Joi.array()
    .length(12)
    .items(
      Joi.object({
        pageNumber: Joi.number().integer().min(1).max(12).required(),
        pageType: Joi.string().valid(PageType.TEXT, PageType.IMAGE).required(),
        content: Joi.string().required(),
      })
    )
    .when(Joi.array().length(12), {
      then: Joi.array().length(12).ordered(
        Joi.object({
          pageNumber: Joi.number().integer().min(1).max(6).required(),
          pageType: Joi.string().valid(PageType.TEXT).required(),
          content: Joi.string().required(),
        }),
        Joi.object({
          pageNumber: Joi.number().integer().min(1).max(6).required(),
          pageType: Joi.string().valid(PageType.IMAGE).required(),
          content: Joi.string().required(),
        })
      )
    })
    .required(),
});


type Code = {
  magicCode: number;
};

export const magicCodeSchema = Joi.object<Code>({
  magicCode: Joi.string().min(6).max(6).uppercase().required(),
});
