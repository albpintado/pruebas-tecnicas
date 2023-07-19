<script lang="ts">
	import type { PageData } from './$types';
	import { books, readingList } from '$lib/stores/books';
	export let data: PageData;

	$: isBookAvailable = $books.some((book) => book.ISBN === data.book.ISBN);

	const addToReadingList = () => {
		if (isBookAvailable) {
			const newReadingList = [...$readingList, data.book];
			readingList.set(newReadingList);
			const newAvailableBooks = $books.filter((book) => book.ISBN !== data.book.ISBN);
			books.set(newAvailableBooks);
		}
	};

	const removeFromReadingList = () => {
		if (!isBookAvailable) {
			const newReadingList = $readingList.filter((book) => book.ISBN !== data.book.ISBN);
			readingList.set(newReadingList);
			const newAvailableBooks = [...$books, data.book];
			books.set(newAvailableBooks);
		}
	};
</script>

<main>
	<img src={data.book.cover} alt={`${data.book.title} cover`} width="300px" />
	<h2>{data.book.title}</h2>
	<h3>{data.book.author.name}</h3>
	<button on:click={isBookAvailable ? addToReadingList : removeFromReadingList}
		>{isBookAvailable ? 'Add to reading list' : 'Remove from reading list'}</button
	>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		gap: 1rem;
	}
</style>
