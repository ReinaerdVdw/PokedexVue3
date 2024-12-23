import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "",
        name: "Pokemon",
        component: () =>
            import("../views/pokemonPage/pokemonPage.vue")
    },
]
export const router = createRouter({
    routes,
    history: createWebHistory(),
})