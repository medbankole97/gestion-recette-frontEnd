import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/css/style.css";

import App from "./App.vue";
import { createPinia } from "pinia";
import router from "@router";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: {
      recette: {
        list: {
          nav: "Pastry",
          nav2: "Kitchen",
          titre: "List of Recipes",
          boutton: "New Recipe",
          col1: "Title",
          col2: "Ingredients",
          col3: "Type",
          col4: "Action",
          data: "No data"
        },
        create: {
          titre: "Add a New Recipe",
          row1: "Title",
          row2: "Ingredients",
          row3: {
            title: "Type",
            select1: "Dessert",
            select2: "Flat Starter",
            select3: "Dish"
          },
          boutton: "Send",
        },
        edit: {
          titre: "Edit the Recipe",
          row1: "Title",
          row2: "Ingredients",
          row3: {
            title: "Type",
            select1: "Dessert",
            select2: "Flat Starter",
            select3: "Dish"
          },
          boutton: "Save",
        },
        show: {
          titre: "Recipe Details",
          row1: "Title",
          row2: "Ingredients",
          row3: "Type",
          boutton: "Close",
        },
      },
    },
    fr: {
      recette: {
        list: {
          nav: "Patisserie",
          nav2: "Cuisine",
          titre: "Liste des Recettes",
          boutton: "Nouvelle Recette",
          col1: "Titre",
          col2: "Ingrédients",
          col3: "Type",
          col4: "Action",
          data: "Pas de données"
        },
        create: {
          titre: "Ajouter une Nouvelle Recette",
          row1: "Titre",
          row2: "Ingrédients",
          row3: {
            title: "Type",
            select1: "Dessert",
            select2: "Entrée",
            select3: "Plat"
          },
          boutton: "Envoyer",
        },
        edit: {
          titre: "Modifier la Recette",
          row1: "Titre",
          row2: "Ingrédients",
          row3: {
            title: "Type",
            select1: "Dessert",
            select2: "Entrée",
            select3: "Plat"
          },
          boutton: "Enregistrer",
        },
        show: {
          titre: "Détails de la Recette",
          row1: "Titre",
          row2: "Ingrédients",
          row3: "Type",
          boutton: "Fermer",
        },
      },
    },
  },
});

const app = createApp(App);
const pinia = createPinia();

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(i18n);
app.use(pinia);
app.use(router);
app.mount("#app");
