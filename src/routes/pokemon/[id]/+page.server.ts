import { error } from '@sveltejs/kit';
import type { EvolutionChain } from '$lib/EvolutionTypes.js';

export const load = async ({ params }) => {
	const pokemonId = params.id;
	const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
		.then((res) => res.json())
		.catch((err) => {
			console.error(err);
			throw error(404, { message: 'Couldn\t find pokemon!' });
		});
	const species = await fetch(pokemon.species.url)
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.error(err);
			throw error(404, { message: 'Couldn\t find pokemon species!' });
		});
	let evolutionChain = await fetch(species.evolution_chain.url)
		.then((res) => res.json())
		.catch((err) => {
			console.error(err);
			throw error(404, { message: 'Couldn\t find evolution chain!' });
		});

	evolutionChain = updateEvolutionWithSpeciesWithImgUrl({ ...evolutionChain.chain });

	return {
		pokemon,
		evolutionChain,
		evolutionUrl: species.evolution_chain.url
	};
};

function updateEvolutionWithSpeciesWithImgUrl(evolution: EvolutionChain) {
	evolution.species.pokemonId = getSpeciesPokemonId(evolution);
	evolution.species.imgUrl = getSpeciesImgUrl(evolution);

	evolution.evolves_to.forEach((evolution) => {
		updateEvolutionWithSpeciesWithImgUrl(evolution);
	});

	return evolution;
}

function getSpeciesPokemonId(evolution: EvolutionChain) {
	return evolution.species.url.split('/').slice(-2)[0];
}

function getSpeciesImgUrl(evolution: EvolutionChain) {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${evolution.species.pokemonId}.gif`;
}
