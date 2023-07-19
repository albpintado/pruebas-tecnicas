import type { Book } from '$lib/models/Book';
import type * as Kit from '@sveltejs/kit';

type RouteParams = {
	book: string;
};

type PageData = {
	books: Book[];
};

export type PageServerLoad = Kit.ServerLoad<RouteParams>;
export type PageLoad = Kit.Load<RouteParams>;
