import { defineStore } from "pinia";
import { reactive } from "vue";

export const useRecetteStore = defineStore("recetteStore", {
  state: () => ({
    recettes: [
      {
        id: 1,
        titre: "Crêpe Nutella",
        ingredients: "Farine, lait, oeuf, beurre, sucre",
        type: "Dessert",
      },
      {
        id: 2,
        titre: "Lasagne",
        ingredients: "Viande, tomate, feuille de lasagnes, béchamel",
        type: "Plat",
      },
    ],
    currentRecette: null,
    recetteForm: reactive({
      titre: null,
      ingredients: null,
      type: null,
    }),
  }),
  actions: {
    resetForm() {
      this.recetteForm.titre = null;
      this.recetteForm.ingredients = null;
      this.recetteForm.type = null;
    },
    getRecipeById(id) {
      const result = this.recettes.find(r => r.id == id)
      return result
    },
    edit(id, newRecette) {
      const index = this.recettes.findIndex((f) => f.id == id);
      if (index !== -1) {
        this.recettes[index] = {
          id: Number(id),
          ...newRecette,
        };
      }
    },
    destroy(id) {
      this.recettes = this.recettes.filter((recette) => recette.id !== id);
    },
    show(id) {
      const recetteIndex = this.recettes.findIndex((c) => c.id == id);
      if (recetteIndex !== -1) {
        this.currentRecette = this.recettes[recetteIndex];
      }
    },
    add() {
      const maxId =
        this.recettes.length > 0
          ? Math.max(...this.recettes.map((c) => c.id))
          : 0;
      const newId = maxId + 1;

      const recette = {
        ...this.recetteForm,
        id: newId,
      };
      this.recettes.push(recette);
      this.resetForm()
    }
  },
});
