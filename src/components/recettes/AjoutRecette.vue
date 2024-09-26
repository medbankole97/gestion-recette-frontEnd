<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-7 m-auto">
        <h3 class="text-center">{{ $t("recette.create.titre") }}</h3>
        <form class="me-auto" @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="titre" class="form-label">{{ $t("recette.create.row1") }}</label>
            <input type="text" class="form-control" id="titre" v-model="recette.titre">
          </div>
          <div class="mb-3">
            <label for="ingredients" class="form-label">{{ $t("recette.create.row2") }}</label>
            <input type="text" class="form-control" id="ingredients" v-model="recette.ingredients">
          </div>
          <div class="mb-3">
            <label for="type" class="form-label">{{ $t("recette.create.row3.title") }}</label>
            <select class="form-control" id="type" v-model="recette.type">
              <option value="Dessert">{{ $t("recette.create.row3.select1") }}</option>
              <option value="Entrée">{{ $t("recette.create.row3.select2") }}</option>
              <option value="Plat">{{ $t("recette.create.row3.select3") }}</option>
            </select>
          </div>

          <div class="d-flex justify-content-between">
            <router-link to="/recette" class="btn btn-success"><i class="fa-solid fa-arrow-left"></i></router-link>
            <button class="btn btn-success">{{ $t("recette.create.boutton") }}</button>
          </div>
        </form>
      </div>
      <div class="col-md-5 hight"></div>
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
  if (recette.titre && recette.ingredients && recette.type) {
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

.row {
  height: 100vh;
}

.hight {
  background-image: url('/src/assets/cuisine/kebab.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>