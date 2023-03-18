import { BookWithMagicCodeAndPages } from "@/protocols";
import repositoryBook from "@/repositories/book-repository";

async function postBook(book: BookWithMagicCodeAndPages ) {

    const magicCode =  await repositoryBook.createBook(book);

    return magicCode
}

async function getBook(){

}

const serviceBook = {
    postBook,
    getBook
}

export default serviceBook;