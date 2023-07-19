import { fetchBook } from '../../services/catalog/api';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		book: fetchBook(params.book)
	};
}) satisfies PageLoad;
