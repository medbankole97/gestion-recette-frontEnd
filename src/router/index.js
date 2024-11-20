import { createRouter, createWebHistory } from "vue-router";

import Home from '@/components/Home.vue';
import Ajout from '@/components/recettes/AjoutRecette.vue';
import Modifie from '@/components/recettes/ModifieRecette.vue';
import Liste from '@/components/recettes/ListeRecette.vue';
import DetailRecette from "@/components/recettes/DetailRecette.vue";


import AjoutCategorie from '@/components/categories/AjoutCategorie.vue';
import ListeCategorie from '@/components/categories/ListeCategorie.vue';
import ModifieCategorie from '@/components/categories/ModifieCategorie.vue';
import DetailCategorie from "@/components/categories/DetailCategorie.vue";

const routes = [
    {
        path: "/",
        name: 'home',
        component: Home,
    },
    {
        path: "/recette",
        children: [
            {
                path: "",
                name: 'list-recette',
                component: Liste,
            },
            {
                path: "new",
                name: 'ajout-recette',
                component: Ajout,
            },
            {
                path: "edit/:id",
                name: 'modifier-recette',
                component: Modifie,
            },
            {
                path: "show/:id",
                name: 'detail-recette',
                component: DetailRecette,
            }
        ]
    },
    {
        path: "/categorie",
        children: [
            {
                path: "",
                name: 'list-categorie',
                component: ListeCategorie,
            },
            {
                path: "new",
                name: 'ajout-categorie',
                component: AjoutCategorie,
            },
            {
                path: "edit/:id",
                name: 'modifier-categorie',
                component: ModifieCategorie,
            },
            {
                path: "show/:id",
                name: 'detail-categorie',
                component: DetailCategorie,
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
