import * as books from '$data/books.json';
import type { Book } from '$lib/models/Book';

export const fetchAllBooks = (): Book[] => {
	const booksList = books.library.map((bookObject) => bookObject.book);
	return booksList;
};

export const fetchBook = (ISBN: string): Book | undefined => {
	const books = fetchAllBooks();
	return books.find((book) => book.ISBN === ISBN);
};
