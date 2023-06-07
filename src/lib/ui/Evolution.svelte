<script lang="ts">
	import type { EvolutionChain } from '$lib/EvolutionTypes';
	import PokemonCard from './PokemonCard.svelte';

	export let evolution: EvolutionChain;

	const { name, imgUrl, pokemonId } = evolution.species;
</script>

<PokemonCard pokemon={{ name, url: imgUrl, id: pokemonId }} />

{#each evolution.evolves_to as chain}
	<svelte:self evolution={chain} />
{/each}
