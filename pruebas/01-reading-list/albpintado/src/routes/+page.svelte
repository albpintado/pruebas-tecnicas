<script lang="ts">
	import { books } from '$lib/stores/books';
</script>

<main>
	<section>
		{#each $books as book}
			<article>
				<a href={`/${book.ISBN}`}
					><img src={book.cover} alt={`${book.title} cover`} width="140px" /></a
				>
			</article>
		{/each}
	</section>
</main>

<style>
	main {
		height: calc(100vh - 8rem);
	}

	section {
		height: 100%;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		place-items: center;
	}

	article:hover {
		transform: scale(1.2);
		transition: transform 200ms ease-in-out;
	}
</style>
