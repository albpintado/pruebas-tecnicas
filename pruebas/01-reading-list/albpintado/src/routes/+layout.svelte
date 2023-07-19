<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { books, readingList } from '$lib/stores/books';
	import type { PageData } from './$types';

	export let data: PageData;
	$: isFooterExpanded = true;

	const toggleFooter = () => {
		isFooterExpanded = !isFooterExpanded;
	};

	onMount(() => {
		books.set(data.books);
	});
</script>

<svelte:head>
	<title>Booklist - albpintado</title>
</svelte:head>

<header id="booklist-header">
	<a href="/"><h1>Booklist</h1></a>
</header>
<slot />
<footer id="booklist-reading-list-footer" class={isFooterExpanded ? 'opened' : 'closed'}>
	<header>
		<h2>Reading list</h2>
		<button on:click={toggleFooter}>+</button>
	</header>
	{#if isFooterExpanded}
		<main transition:fade|local>
			{#each $readingList as book}
				<a href={`/${book.ISBN}`}><img src={book.cover} alt="" height="100px" /></a>
			{/each}
		</main>
	{/if}
</footer>

<style>
	:global(
			html,
			body,
			div,
			span,
			applet,
			object,
			iframe,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6,
			p,
			blockquote,
			pre,
			a,
			abbr,
			acronym,
			address,
			big,
			cite,
			code,
			del,
			dfn,
			em,
			img,
			ins,
			kbd,
			q,
			s,
			samp,
			small,
			strike,
			strong,
			sub,
			sup,
			tt,
			var,
			b,
			u,
			i,
			center,
			dl,
			dt,
			dd,
			ol,
			ul,
			li,
			fieldset,
			form,
			label,
			legend,
			table,
			caption,
			tbody,
			tfoot,
			thead,
			tr,
			th,
			td,
			article,
			aside,
			canvas,
			details,
			embed,
			figure,
			figcaption,
			footer,
			header,
			hgroup,
			menu,
			nav,
			output,
			ruby,
			section,
			summary,
			time,
			mark,
			audio,
			video
		) {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	:global(article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section) {
		display: block;
	}
	:global(body) {
		line-height: 1;
	}
	:global(ol, ul) {
		list-style: none;
	}
	:global(blockquote, q) {
		quotes: none;
	}
	:global(blockquote:before, blockquote:after, q:before, q:after) {
		content: '';
		content: none;
	}
	:global(table) {
		border-collapse: collapse;
		border-spacing: 0;
	}

	#booklist-header {
		height: 3rem;
		background-color: rgb(203, 213, 227);
		margin-bottom: 1rem;
	}

	#booklist-header h1 {
		line-height: 3rem;
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
	}

	#booklist-reading-list-footer {
		position: absolute;
		width: 100%;
		margin-top: 1rem;
		background-color: gray;
		transition: height 0.5s ease-in-out;
		bottom: 0;
	}

	#booklist-reading-list-footer header {
		display: flex;
		height: 3rem;
	}

	#booklist-reading-list-footer header h2 {
		line-height: 3rem;
	}

	.closed {
		height: 3rem !important;
	}

	.opened {
		height: 12.5rem !important;
	}

	#booklist-reading-list-footer main {
		margin: 0 0.5rem;
		display: flex;
		gap: 0.5rem;
	}
</style>
