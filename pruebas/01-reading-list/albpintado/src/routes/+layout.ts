import { fetchAllBooks } from '$api';
import { browser } from '$app/environment';
import type { PageLoad } from './$types';

export const load = (() => {
	const localBooks =
		browser && localStorage.getItem('booklist-availableBooks')
			? localStorage.getItem('booklist-availableBooks') ?? '[]'
			: '[]';
	const localReadingList =
		browser && localStorage.getItem('booklist-readingList')
			? localStorage.getItem('booklist-readingList') ?? '[]'
			: '[]';

	const books =
		JSON.parse(localBooks).length < 1 && JSON.parse(localReadingList).length < 1
			? fetchAllBooks()
			: JSON.parse(localBooks);

	return {
		books
	};
}) satisfies PageLoad;
