<template>
  <div class="container-fluid p-5 ">
    <div class="title d-flex justify-content-end
     align-items-end">
      <h1>Waañu Bideew</h1>
      <router-link to="/recette-list" class="btn btn-lg">Bismillah</router-link>
    </div>

  </div>



</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Protest+Guerrilla&display=swap');

.container-fluid {
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
  /* width: 150px; */
  color: black;
  background-color: burlywood;
  font-size: 20px;
  margin-top: 5vh;
  height: 50px;
}
</style>
