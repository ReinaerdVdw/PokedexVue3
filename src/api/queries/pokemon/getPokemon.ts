import {useQuery} from "@tanstack/vue-query";
import {queryKeys} from "../../common/utils/constants.ts";
import pokemonApi from "../../endpoints/pokemons"
import {ComputedRef} from "vue";
import {IGetPokemonRequest} from "../../types/IGetPokemonRequest.ts";
export default function useGetPokemon(request: ComputedRef<IGetPokemonRequest>){
    const {data, isPending, isSuccess} = useQuery({
        queryKey: [queryKeys.pokemon.GET_POKEMON, request],
        queryFn: () => pokemonApi.getPokemon(request),
        throwOnError: true,
        select: (response) => {
            console.log( response.data);
            return response.data;
        },
        retry: false
    })
    return {
        isPendingPokemon: isPending,
        pokemon: data,
        isSuccessPokemon: isSuccess
    }
}