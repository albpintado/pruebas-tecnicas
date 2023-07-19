import { fetchAllBooks } from '$api';
import { browser } from '$app/environment';
import type { PageLoad } from './$types';

export const load = (() => {
	const localBooks =
		browser && localStorage.getItem('booklist-availableBooks')
			? localStorage.getItem('booklist-availableBooks') ?? '[]'
			: '[]';
	const books = JSON.parse(localBooks).length > 0 ? JSON.parse(localBooks) : fetchAllBooks();

	return {
		books
	};
}) satisfies PageLoad;
