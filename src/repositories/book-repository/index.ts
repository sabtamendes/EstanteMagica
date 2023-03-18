import { prisma } from "@/config";
import { BookWithMagicCodeAndPages } from "@/protocols";

async function createBook(bookData: BookWithMagicCodeAndPages) {
  const createdBook = await prisma.book.create({
    data: {
      title: bookData.title,
      author: bookData.author,
      professor: bookData.professor,
      magicCode: bookData.magicCode,
      pages: {
        create: bookData.pages,
      },
    },
    select: {
      magicCode: true,
    },
  });
  return createdBook;
}

async function find() {}

const repositoryBook = {
  createBook,
  find,
};

export default repositoryBook;
