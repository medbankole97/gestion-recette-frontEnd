<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" activeClass="active">
          <img src="/src/assets/recipeLogo.jpg" alt="Logo" class="logo">
        </router-link>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/recette" class="nav-link text-white" activeClass="active">{{ $t("home.title1") }}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/categorie" class="nav-link text-white" activeClass="active">{{ $t("home.title2") }}</router-link>
            </li>
          </ul>
        </div>

        <form class="d-flex" @submit.prevent="searchRecipe">
          <div class="input-group">
            <input
              class="form-control"
              type="search"
              placeholder="Rechercher une recette"
              v-model="searchQuery"
              aria-label="Rechercher"
            />
            <button class="btn btn-outline-success" type="submit">Recherche</button>
          </div>
        </form>
        <div class="d-flex">
          <select id="langue" class="form-select form-select-sm bg-dark text-white border-0" @change="changeLanguage">
            <option value="en">En</option>
            <option value="fr">Fr</option>
          </select>
        </div>
      </div>
    </nav>
  
    <div class="content mt-5 pt-5">
      <router-view />
      <div v-if="recetteStore.searchResults.length">
        <h3>Résultats de recherche :</h3>
        <ul>
          <li v-for="recette in recetteStore.searchResults" :key="recette.id">
            {{ recette.titre }}
          </li>
        </ul>
      </div>
      <div v-else-if="noResults">
        <div class="alert alert-warning" role="alert">
          Aucune recette trouvée
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRecetteStore } from './store/recetteStore';
import { useI18n } from 'vue-i18n';
const t = useI18n();
const { locale } = useI18n();
const searchQuery = ref('');
const recetteStore = useRecetteStore();
const noResults = ref(false);

function changeLanguage(event) {
  locale.value = event.target.value;
}

function searchRecipe() {
  recetteStore.searchRecettes(searchQuery.value);
  noResults.value = recetteStore.searchResults.length === 0;
}
</script>

<style scoped>
.logo {
  height: 40px;
  width: auto;
}
.active{
  font-weight: 600;
  border-bottom: 3px solid rgb(165, 164, 164);
  color: black;
  border-radius: 10px;
}

.content {
  padding-top: 70px; 
}
</style>
