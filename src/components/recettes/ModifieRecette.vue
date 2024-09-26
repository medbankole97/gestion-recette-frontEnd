<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-7 m-auto">
        <h3 class="text-center">{{ $t("recette.edit.titre") }}</h3>
        <form class="me-auto" @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="titre" class="form-label">{{ $t("recette.edit.row1") }}</label>
            <input type="text" class="form-control" id="titre" v-model="form.titre">
          </div>
          <div class="mb-3">
            <label for="ingredients" class="form-label">{{ $t("recette.edit.row2") }}</label>
            <input type="text" class="form-control" id="ingredients" v-model="form.ingredients">
          </div>
          <div class="mb-3">
            <label for="type" class="form-label">{{ $t("recette.edit.row3.title") }}</label>
            <select class="form-control" id="type" v-model="form.type">
              <option value="Dessert">{{ $t("recette.edit.row3.select1") }}</option>
              <option value="Entrée">{{ $t("recette.edit.row3.select1") }}</option>
              <option value="Plat">{{ $t("recette.edit.row3.select1") }}</option>
            </select>
          </div>

          <div class="d-flex justify-content-between">
            <router-link to="/recette" class="btn btn-success"><i class="fa-solid fa-arrow-left"></i></router-link>
            <button class="btn btn-success">{{ $t("recette.edit.boutton") }}</button>
          </div>
        </form>
      </div>
      <div class="col-md-5 hight"></div>
    </div>


  </div>


</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useRecetteStore } from '@store'
import { I18nD, useI18n } from 'vue-i18n';

const t = useI18n()
const store = useRecetteStore()
const route = useRoute();
const router = useRouter()

const idRecette = route.params.id

const form = store.getRecipeById(idRecette)

const onSubmit = () => {
  if (form.titre && form.ingredients && form.type) {
    store.edit(idRecette, form)
    router.push('/recette')
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
  background-image: url('/src/assets/patisserie/beignet.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>