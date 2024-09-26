import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue'
import Ajout from '../components/recettes/AjoutRecette.vue'
import Modifie from '../components/recettes/ModifieRecette.vue'
import Liste from '../components/recettes/ListeRecette.vue'

import Patisserie from '../views/Patisserie.vue'
import Cuisine from '../views/Cuisine.vue'

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
                path: "patisserie",
                name: 'patisserie',
                component: Patisserie,
            },
            {
                path: "cuisine",
                name: 'cuisine',
                component: Cuisine,
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;