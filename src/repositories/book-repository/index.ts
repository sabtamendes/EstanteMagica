import { prisma } from "@/config";
import { BookWithMagicCodeAndPages } from "@/protocols";

async function createBook(bookData: BookWithMagicCodeAndPages) {
  return await prisma.book.create({
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
}

async function find(magicCode: string) {
  return await prisma.book.findUnique({
    where: { magicCode },
    include: {
      pages: {
        orderBy: {
          pageNumber: "asc",
        },
      },
    },
  });
}

const repositoryBook = {
  createBook,
  find,
};

export default repositoryBook;
