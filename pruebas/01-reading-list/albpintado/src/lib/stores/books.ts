import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';
import type { Book } from '$lib/models/Book';

const localBooks = browser ? localStorage.getItem('booklist-availableBooks') : '[]';
const localReadingList = browser ? localStorage.getItem('booklist-readingList') : '[]';

export const books = writable<Book[]>(JSON.parse(localBooks ?? '[]'));
export const readingList = writable<Book[]>(JSON.parse(localReadingList ?? '[]'));

books.subscribe((newAvailableBooks) => {
	if (browser) {
		localStorage.setItem('booklist-availableBooks', JSON.stringify(newAvailableBooks));
	}
});

readingList.subscribe((newReadingList) => {
	if (browser) {
		localStorage.setItem('booklist-readingList', JSON.stringify(newReadingList));
	}
});

if (browser) {
	window.addEventListener('storage', () => {
		const storedAvailableBooks = localStorage.getItem('booklist-availableBooks');
		const storedReadingList = localStorage.getItem('booklist-readingList');
		if (storedAvailableBooks === null || storedReadingList === null) return;

		const localAvailableBooksValue = JSON.parse(storedAvailableBooks);
		const localReadingListValue = JSON.parse(storedReadingList);
		if (localAvailableBooksValue !== get(books)) books.set(localAvailableBooksValue);
		if (localReadingListValue !== get(books)) books.set(localReadingListValue);
	});
}
