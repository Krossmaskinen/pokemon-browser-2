<script lang="ts">
	import type { PokemonPreview } from '$lib/PokemonTypes';

	export let pokemon: PokemonPreview;

	$: imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokemon.id}.gif`;
</script>

<a
	href="/pokemon/{pokemon.id}"
	class="hover:bg-slate-800 box-border flex flex-col justify-between items-center p-10 h-full"
>
	<div class="pokemon h-16">
		<img
			class="h-full"
			src={imageSrc}
			alt={pokemon.name}
			on:error={() => {
				imageSrc = '/pikachu-shock.png';
			}}
		/>
	</div>
	<h2 class="font-bold text-lg pt-4">#{pokemon.id} - {pokemon.name}</h2>
</a>
