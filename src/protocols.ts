import { PageType, Prisma } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type MagicBook = {
  title: string;
  author: string;
  professor: string;
  pages: Prisma.PageCreateInput[];
};

export type Pages = {
  pageNumber: number;
  pageType: PageType;
  content: string;
}[];

export type BookWithMagicCodeAndPages = {
  title: string;
  author: string;
  professor: string;
  magicCode: string;
  pages: Prisma.PageCreateInput[];
}