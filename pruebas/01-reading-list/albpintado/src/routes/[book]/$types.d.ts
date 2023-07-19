import type * as Kit from '@sveltejs/kit';

type RouteParams = {
	book: string;
};

type PageData = {
	book: Book;
};

export type PageServerLoad = Kit.ServerLoad<RouteParams>;
export type PageLoad = Kit.Load<RouteParams>;
