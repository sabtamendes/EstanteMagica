import { Request, Response } from "express";
import httpStatus from "http-status";
import { MagicBook } from "@/protocols";
import serviceBook from "@/services/book-service";
import { randomBytes } from "crypto";

export async function postBook(req: Request, res: Response) {
  const { title, author, professor, pages } = req.body as MagicBook;

  const magicCode = generateRandomCode();
  const book = { title, author, professor, magicCode, pages };
  try {
    const code = await serviceBook.postBook(book);

    return res.status(httpStatus.CREATED).send(code);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST);
  }
}

export async function getBook(req: Request, res: Response) {}

function generateRandomCode(): string {
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
