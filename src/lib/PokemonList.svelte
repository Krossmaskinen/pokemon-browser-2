<script lang="ts">
	import type { PokemonPreview } from './PokemonTypes';
	import PokemonCard from './ui/PokemonCard.svelte';

	export let pokemons: PokemonPreview[] = [];
</script>

<ul class="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
	{#each pokemons as pokemon ({})}
		<li class="border border-black">
			<PokemonCard {pokemon} />
		</li>
	{/each}
</ul>
