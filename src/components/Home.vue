<template>
<div class="welcome-message text-center my-5">
      <h2>Bienvenue sur Waañu Bideew</h2>
      <p>Découvrez et partagez les meilleures recettes du monde entier !</p>
    </div>
  <div class="container-fluid p-5">
    <div id="carouselExampleIndicators" class="carousel slide mb-5" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/src/assets/cuisine/back.jpg" class="d-block w-100" alt="back.jpg">
        </div>
        <div class="carousel-item">
          <img src="/src/assets/cuisine/burger.jpg" class="d-block w-100" alt="burger.jpg">
        </div>
        <div class="carousel-item">
          <img src="/src/assets/cuisine/tacos.jpg" class="d-block w-100" alt="tacos">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

<!--    
    <div class="title d-flex justify-content-end align-items-end">
      <router-link to="/recette" class="btn btn-lg">Bismillah</router-link>
    </div> -->
  </div>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Protest+Guerrilla&display=swap');

.title {
  display: flex;
  flex-direction: column;
}

.btn {
  color: black;
  font-size: 20px;
  margin-top: 5vh;
  height: 50px;
}

.menu {
  margin-bottom: 2vh;
}

.carousel-item img {
  height: 400px;
  object-fit: cover; 
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
