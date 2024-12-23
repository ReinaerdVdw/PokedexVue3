<script setup lang="ts">
import { defineProps, ref, computed } from "vue";
import {IGetPokemonResponse} from "../api/types/IGetPokemonReponse.ts";

// Define incoming props
const displayPokemon = computed(() => {
  return
})


// Dynamically compute the background color based on pokemonTypes[0]
// const backgroundColor = computed(() => {
//   const type = props.pokemon.types?.type[0]?.toLowerCase();
//   return colours[type] || '#FFFFFF'; // Default to white if not found
// });
console.log(props);

</script>

<template>
  <div class="pokemon-card">
<!--    <img :src="props.pokemon.sprites.front_default as string" alt="Pokemon image" />-->
    <h2>{{ props.pokemon.name }}</h2>
    <p>ID: {{ props.pokemon.id }}</p>
    <p>HP: {{ props.pokemon.stats[0].base_stat }}</p>
    <p>Abilities: {{ props.pokemon.abilities }}</p>
    <p>First Moves: {{ props.pokemon.moves[0] }}, {{ props.pokemon.moves[1] }}</p>
    <p>Types: {{ formattedTypes}}</p>

    <button @click="toggleCollapse">
      {{ isCollapsed ? "Show All Moves" : "Hide All Moves" }}
    </button>

    <div v-if="!isCollapsed">
      <h3>Moves:</h3>
      <div v-for="(row, index) in splitMovesIntoRows(props.pokemon.moves)" :key="index">
        <p>{{ row.join(", ") }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.pokemon-card {
  border: 1px solid black;
  padding: 1rem;
  margin-top: 1rem;
  color: white;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  border-radius: 50px;
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
