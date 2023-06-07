/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { PokemonPreview, PokemonPreviewApi } from '$lib/PokemonTypes';
import { error } from '@sveltejs/kit';

const limit = 10;
const baseUrl = 'https://pokeapi.co/api/v2';

export async function load({ params, fetch }) {
	const id = params.id || 0;
	const offset = +id * limit;

	const result = await fetch(`${baseUrl}/pokemon?offset=${offset}&limit=${limit}`).then((res) =>
		res.json()
	);

	if (result.results.length === 0) {
		throw error(404, { message: 'No Pokémons here!' });
	}

	const pokemons = result.results.map((pokemon: PokemonPreviewApi): PokemonPreview => {
		const urlParts = pokemon.url!.split('/').filter((part) => part);
		const id = urlParts[urlParts.length - 1];

		return {
			...pokemon,
			id
		};
	});

	return { pokemons, hasNext: !!result.next };
}
