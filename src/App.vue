<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="/src/assets/recipeLogo.jpg" alt="Logo" class="logo">
        </router-link>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/recette" class="nav-link text-white">Recettes</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/categorie" class="nav-link text-white">Catégories</router-link>
            </li>
          </ul>
        </div>
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
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

function changeLanguage(event) {
  locale.value = event.target.value
}
</script>


<style scoped>
.logo {
  height: 40px;
  width: auto;
}


.content {
  padding-top: 70px; 
}


</style>

