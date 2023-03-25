import { PrismaClient, PageType } from "@prisma/client";
const prisma = new PrismaClient();
import { randomBytes } from "crypto";

export function generateRandomCode(): string {
  let code = "";
  while (code.length < 6) {
    const byte = randomBytes(1)[0];
    const char = String.fromCharCode(byte);
    if (char >= "A" && char <= "Z") {
      code += char;
    }
  }
  return code;
}

async function createBook() {
  const book = await prisma.book.create({
    data: {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      professorPink: "Albus Dumbledore",
      magicCode: generateRandomCode(),
      pages: {
        create: [
          {
            pageNumber: 1,
            pageType: PageType.TEXT,
            content: "Lorem ipsum dolor sit amet",
          },
          {
            pageNumber: 2,
            pageType: PageType.IMAGE,
            content: "https://exemplo.com/imagem.jpg",
          },
          {
            pageNumber: 3,
            pageType: PageType.TEXT,
            content: "consectetur adipiscing elit",
          },
          {
            pageNumber: 4,
            pageType: PageType.IMAGE,
            content: "https://exemplo.com/imagem2.jpg",
          },
          {
            pageNumber: 5,
            pageType: PageType.TEXT,
            content: "sed do eiusmod tempor",
          },
          {
            pageNumber: 6,
            pageType: PageType.IMAGE,
            content: "https://exemplo.com/imagem3.jpg",
          },
          {
            pageNumber: 7,
            pageType: PageType.TEXT,
            content: "incididunt ut labore et dolore magna aliqua",
          },
          {
            pageNumber: 8,
            pageType: PageType.IMAGE,
            content: "https://exemplo.com/imagem4.jpg",
          },
          {
            pageNumber: 9,
            pageType: PageType.TEXT,
            content: "Ut enim ad minim veniam",
          },
          {
            pageNumber: 10,
            pageType: PageType.IMAGE,
            content: "https://exemplo.com/imagem5.jpg",
          },
          {
            pageNumber: 11,
            pageType: PageType.TEXT,
            content: "quis nostrud exercitation ullamco laboris",
          },
          {
            pageNumber: 12,
            pageType: PageType.IMAGE,
            content: "https://exemplo.com/imagem6.jpg",
          },
        ],
      },
    },
  });

  console.log(book);
}

createBook()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
