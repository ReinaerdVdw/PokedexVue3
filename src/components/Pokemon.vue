
<script setup lang="ts">
import {computed, ref, type Ref} from "vue";
import '../style.css';
import {IGetPokemonRequest} from "../api/types/IGetPokemonRequest";
import useGetPokemon from "../api/queries/pokemon/getPokemon";
const isCollapsed = ref(true);
const nameInput = ref("");
const request: Ref<IGetPokemonRequest> = ref({name: ""});
const showCard = ref(false);
const errorMessage = ref("");
const {isPendingPokemon, pokemon, isSuccessPokemon} = useGetPokemon(
    computed(() => ({
          name: request.value.name
        }
    )));
// Toggle function for collapse
function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value;
}

// Split moves into rows of 3
function splitMovesIntoRows(moves : any) {
  const rows = [];
  for (let i = 0; i < moves.length; i += 3) {
    rows.push(moves.slice(i, i + 3));
  }
  return rows;
}

const backgroundColor = computed(() => {
  const type = pokemon.value?.types?.[0]?.type.name.toLowerCase();
  return type ? colours[type] || '#FFFFFF' : '#FFFFFF';
})

// Colours object for background mapping
const colours = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD'
};

console.log("PROPS IN CARD", pokemon);

function getPokemon() {
  request.value.name = nameInput.value;
  errorMessage.value = "";
  showCard.value = true;
}

</script>

<template>
  <div>
    <input v-model="nameInput" placeholder="Enter Pokémon name" />
    <button type="submit" @click="getPokemon()">Get Pokémon</button>
  </div>
  <div v-if="pokemon">
    <div class="card" :style="{ backgroundColor: backgroundColor }">
      <img :src="pokemon?.sprites.front_default as string" alt="Pokemon image" />
      <h2>{{ pokemon?.name }}</h2>
      <p class="background-number">#{{ pokemon?.id }}</p>
      <p>HP: {{ pokemon?.stats[0].base_stat }}</p>
      <p>Abilities: {{ pokemon?.abilities.map(a => a.ability.name).join(', ') }}</p>
      <p>Types: {{ pokemon?.types.map(t => t.type.name).join(', ') }}</p>

      <button @click="toggleCollapse">
        {{ isCollapsed ? "Show All Moves" : "Hide All Moves" }}
      </button>

      <div v-if="!isCollapsed">
        <h3>Moves:</h3>
        <div v-for="(row, index) in splitMovesIntoRows(pokemon?.moves.map(m => m.move.name))" :key="index">
          <p>{{ row.join(", ") }}</p>
        </div>
      </div>
    </div>
  </div>
  <p v-if="errorMessage">{{ errorMessage }}</p>
</template>


