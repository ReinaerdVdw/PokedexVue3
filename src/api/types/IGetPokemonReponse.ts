export interface IGetPokemonResponse {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: { ability: { name: string; url: string }; is_hidden: boolean; slot: number }[];
    forms: { name: string; url: string }[];
    game_indices: { game_index: number; version: { name: string; url: string } }[];
    held_items: {
        item: { name: string; url: string };
        version_details: { rarity: number; version: { name: string; url: string } }[]
    }[];
    location_area_encounters: string;
    moves: {
        move: { name: string; url: string };
        version_group_details: {
            level_learned_at: number;
            move_learn_method: { name: string; url: string };
            version_group: { name: string; url: string }
        }[]
    }[];
    species: { name: string; url: string };
    sprites: {
        front_default: string | null;
        front_shiny: string | null;
        front_female: string | null;
        front_shiny_female: string | null;
        back_default: string | null;
        back_shiny: string | null;
        back_female: string | null;
        back_shiny_female: string | null;
        other?: {
            dream_world?: { front_default: string | null; front_female: string | null };
            home?: {
                front_default: string | null;
                front_shiny: string | null;
                front_female: string | null;
                front_shiny_female: string | null
            };
            official_artwork?: { front_default: string | null };
        };
    };
    stats: { stat: { name: string; url: string }; effort: number; base_stat: number }[];
    types: { slot: number; type: { name: string; url: string } }[];
}
