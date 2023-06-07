<script lang="ts">
	import { navigating, page } from '$app/stores';
	import { navigation } from '$lib/stores/navigation.js';
	import type { PageData } from './$types';
	import Evolution from '$lib/ui/Evolution.svelte';
	import Loader from '$lib/Loader.svelte';

	export let data: PageData;

	$: id = $page.params.id;
	$: ({ pokemon, evolutionChain } = data);
	$: imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`;
</script>

<svelte:head>
	<title>Pokémon Browser | #{id} - {pokemon.name}</title>
</svelte:head>

<nav class="py-4 flex justify-start">
	<a href={$navigation.previousUrl} class="btn btn-outline btn-info">&lt; Pokémons</a>
</nav>

{#if $navigating?.to}
	<Loader />
{:else}
	<div class="flex justify-center w-full">
		<h1 class="text-6xl font-bold pt-4 pb-10">#{id} - {pokemon.name}</h1>
	</div>

	<div class="flex h-36 justify-center">
		<img
			class="h-full"
			src={imageSrc}
			alt={pokemon.name}
			on:error={() => {
				imageSrc = '/pikachu-shocked.png';
			}}
		/>
	</div>

	<section class="max-w-lg m-auto text-lg py-10">
		<h2 class="text-4xl font-bold pb-4">Abilities</h2>
		<ul class="list pl-4">
			{#each pokemon.abilities as { ability }}
				<li class="list-disc">
					{ability.name}
				</li>
			{/each}
		</ul>
	</section>

	<section class="max-w-lg m-auto text-lg py-4">
		<h2 class="text-4xl font-bold pb-4">Evolutions</h2>

		<div class="list-none grid grid-cols-1 sm:grid-cols-3 gap-4">
			<Evolution evolution={evolutionChain} />
		</div>
	</section>
{/if}
