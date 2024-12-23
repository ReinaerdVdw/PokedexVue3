import {api} from "../common/domain/axios.ts";
import {IGetPokemonResponse} from "../types/IGetPokemonReponse.ts";
import {ComputedRef} from "vue";
import {IGetPokemonRequest} from "../types/IGetPokemonRequest.ts";

function getPokemon(request: ComputedRef<IGetPokemonRequest>){
    console.log(request.value);
    const response = api().get<IGetPokemonResponse>(`pokemon/${request.value.name.toLowerCase()}`)
    console.log(response);
    return response;
}
export default {
    getPokemon
}