export type PokemonPreview = {
	name: string;
	url?: string;
	id?: string;
};

export type PokemonPreviewApi = Omit<PokemonPreview, 'id'>;

export interface Ability {
	name: string;
	url: string;
}

export interface AbilityDetails {
	is_hidden: boolean;
	slot: number;
	ability: Ability;
}

export interface Form {
	name: string;
	url: string;
}

export interface GameIndex {
	game_index: number;
	version: {
		name: string;
		url: string;
	};
}

export interface Item {
	name: string;
	url: string;
}

export interface VersionDetail {
	rarity: number;
	version: {
		name: string;
		url: string;
	};
}

export interface HeldItem {
	item: Item;
	version_details: VersionDetail[];
}

export interface Move {
	name: string;
	url: string;
}

export interface MoveLearnMethod {
	name: string;
	url: string;
}

export interface VersionGroup {
	name: string;
	url: string;
}

export interface VersionGroupDetail {
	level_learned_at: number;
	version_group: VersionGroup;
	move_learn_method: MoveLearnMethod;
}

export interface Species {
	name: string;
	url: string;
	id?: string;
}

export interface DreamWorldSprites {
	front_default: string;
	front_female: string | null;
}

export interface HomeSprites {
	front_default: string;
	front_female: string | null;
	front_shiny: string;
	front_shiny_female: string | null;
}

export interface OfficialArtworkSprites {
	front_default: string;
}

export interface OtherSprites {
	dream_world: DreamWorldSprites;
	home: HomeSprites;
	'official-artwork': OfficialArtworkSprites;
}

export interface GenerationISprites {
	back_default: string;
	back_gray: string;
	front_default: string;
	front_gray: string;
}

export interface GenerationIISprites {
	back_default: string;
	back_shiny: string;
	front_default: string;
	front_shiny: string;
}

// ... Continue defining types for other generations ...

export interface Sprites {
	back_default: string;
	back_female: string | null;
	back_shiny: string;
	back_shiny_female: string | null;
	front_default: string;
	front_female: string | null;
	front_shiny: string;
	front_shiny_female: string | null;
	other: OtherSprites;
	versions: {
		'generation-i': {
			'red-blue': GenerationISprites;
			yellow: GenerationISprites;
		};
		'generation-ii': {
			crystal: GenerationIISprites;
			gold: GenerationIISprites;
			silver: GenerationIISprites;
		};
	};
}

export interface Stat {
	name: string;
	url: string;
}

export interface StatDetails {
	base_stat: number;
	effort: number;
	stat: Stat;
}

export interface Type {
	slot: number;
	type: {
		name: string;
		url: string;
	};
}

export interface PastType {
	generation: {
		name: string;
		url: string;
	};
	types: Type[];
}

export interface Pokemon {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	is_default: boolean;
	order: number;
	weight: number;
	abilities: AbilityDetails[];
	forms: Form[];
	game_indices: GameIndex[];
	held_items: HeldItem[];
	location_area_encounters: string;
	moves: {
		move: Move;
		version_group_details: VersionGroupDetail[];
	}[];
	species: Species;
	sprites: Sprites;
	stats: StatDetails[];
	types: Type[];
	past_types: PastType[];
}
