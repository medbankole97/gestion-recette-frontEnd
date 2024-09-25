<template>
  <div class="container-fluid">
    <div class="hight"></div>
    <div class="mt-2">
      <h3 class="text-center">{{$t("recette.create.titre")}}</h3>
      <div class="w-50 m-auto">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="titre" class="form-label">Titre</label>
            <input type="text" class="form-control" id="titre" v-model="recette.titre">
          </div>
          <div class="mb-3">
            <label for="ingredients" class="form-label">Ingredients</label>
            <input type="text" class="form-control" id="ingredients" v-model="recette.ingredients">
          </div>
          <div class="mb-3">
            <label for="type" class="form-label">Type</label>
            <select class="form-control" id="type" v-model="recette.type">
              <option value="Dessert">Dessert</option>
              <option value="Entrée">Entrée</option>
              <option value="Plat">Plat</option>
            </select>
          </div>

          <div class="d-flex justify-content-between">
            <router-link to="/recette-list" class="btn btn-success"><i class="fa-solid fa-arrow-left"></i></router-link>
            <button class="btn btn-success">Ajouter</button>
          </div>
        </form>
      </div>
    </div>

  </div>


</template>

<script setup>
import { useRecetteStore } from '@store'
import { I18nD, useI18n } from 'vue-i18n';

const t = useI18n()
const store = useRecetteStore()
const recette = store.recetteForm

const onSubmit = () => {
  if(recette.titre && recette.ingredients && recette.type) {
    store.add()
  } else {
    console.log("Please fill all fields in form");
  }
}
</script>

<style scoped>
.container-fluid {
  height: 100vh;
}
.hight {
  background-image: url('/src/assets/cuisine/entree_poulet.jpg');
  height: 30vh;
  background-repeat:round;
}
</style>