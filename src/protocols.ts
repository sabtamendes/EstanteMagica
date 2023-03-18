import { PageType } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type MagicBook = {
  title: string;
  author: string;
  professor: string;
//   magicCode: string; eu que vou colocar e retornar
  pages: MagicPages;
};

export type MagicPages = {
  pageNumber: number;
  pageType: PageType;
  content: string;
};
