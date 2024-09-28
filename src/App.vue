<template>
  <div class="container-fluid">
    <nav class="navbar bg-white">
    <router-link to="/">
      <img src="/src/assets/logo.png" alt="Logo" class="logo">
    </router-link>
    <div>
      <select id="langue" @change="changeLanguage">
        <option value="en">En</option>
        <option value="fr">Fr</option>
      </select>
    </div>
  </nav>
    

   
    <router-link to="/" />
    <router-view />
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
.container-fluid {
  background-color: beige;
}
.logo {
  width: 60px;
}

.container-fluid {
  padding: 10px 10em;
}
</style>
