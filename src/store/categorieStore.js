import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCategorieStore = defineStore("categorieStore", {
  state: () => ({
    categories: [
      { id: 1, nom: "Dessert" },
      { id: 2, nom: "Entrée" },
      { id: 3, nom: "Plat" },
    ],
    currentCategorie: null,
    categorieForm: reactive({
      nom: null,
    }),
  }),
  actions: {
    resetForm() {
      this.categorieForm.nom = null;
    },
    getCategorieById(id) {
      return this.categories.find((cat) => cat.id == id);
    },
    addCategorie(newCategorie) {
      const nom = newCategorie.nom?.trim();
      
      if (!nom) {
        console.warn("Le nom de la catégorie ne peut pas être vide.");
        return;
      }

      const categorieExiste = this.categories.some(
        (cat) => cat.nom.toLowerCase() === nom.toLowerCase()
      );
      if (categorieExiste) {
        console.warn("Cette catégorie existe déjà.");
        return;
      }

      const maxId = this.categories.length
        ? Math.max(...this.categories.map((cat) => cat.id))
        : 0;

      const newCategorieObject = {
        id: maxId + 1,
        nom: nom,
      };

      this.categories.push(newCategorieObject);
      this.resetForm();
    },
    editCategorie(id, updatedCategorie) {
      const index = this.categories.findIndex((cat) => cat.id == id);
      if (index !== -1) {
        this.categories[index] = {
          ...this.categories[index],
          ...updatedCategorie,
        };
      }
    },
    deleteCategorie(id) {
      this.categories = this.categories.filter((cat) => cat.id !== id);
    },
  },
});
