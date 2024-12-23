import { createApp } from "vue";
import { router } from "./router";
import { QueryCache, QueryClient, VueQueryPlugin } from "@tanstack/vue-query";
import App from './App.vue';
const app = createApp(App);
const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error) => {
            app.config.globalProperties.$toast.add({
                severity: "error",
                summary: "Error",
                detail: error.message,
                life: 3000,
            });
        },
    }),
    defaultOptions: {
        queries: {
            staleTime: 10000,
        },
    }
})
app.use(VueQueryPlugin, {queryClient});
app.use(router);
app.mount("#app");