<script lang="ts">
	import { navigating, page } from '$app/stores';
	import Loader from '$lib/Loader.svelte';
	import PokemonList from '$lib/PokemonList.svelte';
	import { navigation } from '$lib/stores/navigation.js';
	import LinkButton from '$lib/ui/LinkButton.svelte';

	export let data;

	$: offsetMultiplier = $page.params.id || 0;
	$: $navigation = { previousUrl: $page.url.pathname.toString() };
	$: ({ pokemons, hasNext } = data);
</script>

<svelte:head>
	<title>Pokémon Browser | {offsetMultiplier}</title>
</svelte:head>

<div class="flex justify-center w-full">
	<h1 class="text-6xl font-bold py-4">Pokémons</h1>
</div>

<nav class="py-4 btn-group-horizontal flex justify-center">
	{#if +offsetMultiplier > 0}
		<LinkButton href={`/${+offsetMultiplier - 1}`} variant="warning">Prev</LinkButton>
	{/if}
	{#if hasNext}
		<LinkButton href={`/${+offsetMultiplier + 1}`} variant="success">Next</LinkButton>
	{/if}
</nav>

{#if pokemons.length || !$navigating?.to}
	<PokemonList {pokemons} />
{:else}
	<Loader />
{/if}
