import axios from "axios";
import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCategorieStore = defineStore("categorieStore", {
  state: () => ({
    categories: [],
    currentCategorie: null,
    categorieForm: reactive({
      nom: null,
    }),
  }),
  actions: {
    async loadDataFromApi() {
      try {
        const resp = await axios.get("http://localhost:3022/categories");
        this.categories = resp.data;
      } catch (error) {
        this.categories = [];
      }
    },
    async store(categorie) {
      return await axios.post("http://localhost:3022/categories", categorie);
    },
    async update(id, categorie) {
      const resp = await axios.put(
        `http://localhost:3022/categories/${id}`,
        categorie
      );
      await this.loadDataFromApi();
      return resp
    },
    async destroy(id) {
      await axios.delete(`http://localhost:3022/categories/${id}`);
      await this.loadDataFromApi();
    },
    async getById(id) {
      const resp = await axios.get(`http://localhost:3022/categories/${id}`);
      return resp.data
    },
    async recipes(id) {
      await axios.get(`http://localhost:3022/categories/recipes/${id}`);
      await this.loadDataFromApi();
    },
    async resetForm() {
      this.categorieForm.nom= null;
    }
  },
});
