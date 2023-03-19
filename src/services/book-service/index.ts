import { notFoundError } from "@/errors";
import { BookWithMagicCodeAndPages } from "@/protocols";
import repositoryBook from "@/repositories/book-repository";

async function postBook(book: BookWithMagicCodeAndPages) {
  const magicCode = await repositoryBook.createBook(book);

  return magicCode;
}

async function getBook(magicCode: string) {
  const book = await repositoryBook.find(magicCode);

  if (!book) throw notFoundError();

  return book;
}

const serviceBook = {
  postBook,
  getBook,
};

export default serviceBook;
