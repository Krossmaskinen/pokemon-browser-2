import { writable } from 'svelte/store';

type PokemonResources = {
	previous: string;
	next: string;
};

export const pokemonResources = writable<PokemonResources>({
	previous: '',
	next: ''
});
