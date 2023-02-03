import { createWebHistory, createRouter } from "vue-router";
import CharactersGallery from "@/components/CharactersGallery";

const routes = [
    {
        path: "/",
        name: "CharactersGallery",
        component: CharactersGallery,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;