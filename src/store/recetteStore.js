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
    async loadDataFromApi() {
      try {
        const resp = await axios.get("http://localhost:3022/recipes")
        this.recettes = resp.data
      } catch (error) {
        this.recettes = []
      }
    },
    async store(recette) {
      return await axios.post("http://localhost:3022/recipes", recette);
    },
    async update(id, recette) {
      const resp = await axios.put(`http://localhost:3022/recipes/${id}`, recette);
      await this.loadDataFromApi();
      return resp
    },
    async destroy(id) {
      await axios.delete(`http://localhost:3022/recipes/${id}`);
      await this.loadDataFromApi()
    },
    async getById(id) {
      const resp = await axios.get(`http://localhost:3022/recipes/${id}`)
      return resp.data
    },
    async resetForm() {
      this.recetteForm.titre = null;
      this.recetteForm.ingredients = null;
      this.recetteForm.type = null;
      this.recetteForm.categorie_id = null;

    },
  },
});
