import axios from "axios";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useRecetteStore = defineStore("recetteStore", {
  state: () => ({
    recettes: [],
    currentRecette: null,
    recetteForm: reactive({
      titre: null,
      ingredients: null,
      type: null,
      categorie_id: null,
    }),
  }),
  actions: {
    resetForm() {
      this.recetteForm.titre = null;
      this.recetteForm.ingredients = null;
      this.recetteForm.type = null;
      this.recetteForm.categorie_id = null;
    },
    async loadDataFromApi() {
      try {
        const resp = await axios.get("http://localhost:3020/recipes")
        this.recettes = resp.data
      } catch (error) {
        this.recettes = []
      }
    },
    async store(recette) {
      return await axios.post("http://localhost:3020/recipes", recette);
    },
    async update(id, recette) {
      return await axios.put(`http://localhost:3020/recipes/${id}`, recette);
    },
    async destroy(id) {
      await axios.delete(`http://localhost:3020/recipes/${id}`);
      await this.loadDataFromApi()
    },
    async getById(id) {
      const recette = await axios.get(`http://localhost:3020/recipes/${id}`);
      return recette.data
    },
    resetForm() {
      this.recetteForm.titre = null;
      this.recetteForm.ingredients = null;
      this.recetteForm.type = null;
    },
  },
});
