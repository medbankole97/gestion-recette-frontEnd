<template>
  <div class="container">
    <div class="menu d-flex justify-content-center mb-4">
      <router-link to="/recette" class="btn btn-lg me-3">Recettes</router-link>
      <router-link to="/categorie" class="btn btn-lg">Catégories</router-link>
    </div>
    <div class="title d-flex justify-content-end align-items-end">
      <h1>Waañu Bideew</h1>
      <router-link to="/recette" class="btn btn-lg">Bismillah</router-link>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Protest+Guerrilla&display=swap');

.container {
  background-image: url('../assets/back.jpg');
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: "Protest Guerrilla", sans-serif;
}
.title {
  display: flex;
  flex-direction: column;
}
.btn {
  color: black;
  background-color: burlywood;
  font-size: 20px;
  margin-top: 5vh;
  height: 50px;
}
.menu {
  margin-bottom: 2vh; /* Ajoutez un peu d'espace entre le menu et le titre */
}
</style>
