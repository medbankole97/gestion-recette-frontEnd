<template>
  <div class="container-fluid">
    <div class="hight"></div>
    <div class="mt-2">
      <h3 class="text-center">Modifier la recette :</h3>
      <div class="w-50 m-auto">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="titre" class="form-label">Titre</label>
            <input type="text" class="form-control" id="titre" v-model="form.titre">
          </div>
          <div class="mb-3">
            <label for="ingredients" class="form-label">Ingredients</label>
            <input type="text" class="form-control" id="ingredients" v-model="form.ingredients">
          </div>
          <div class="mb-3">
            <label for="type" class="form-label">Type</label>
            <select class="form-control" id="type" v-model="form.type">
              <option value="Dessert">Dessert</option>
              <option value="Entrée">Entrée</option>
              <option value="Plat">Plat</option>
            </select>
          </div>

          <div class="d-flex justify-content-between">
            <router-link to="/recette-list" class="btn btn-success"><i class="fa-solid fa-arrow-left"></i></router-link>
            <button class="btn btn-success">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>

  </div>


</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useRecetteStore } from '@store'
import { reactive } from 'vue';
const store = useRecetteStore()
const route = useRoute();
const router = useRouter()

const idRecette = route.params.id

const form = reactive({
  titre: store.recetteForm.titre,
  ingredients: store.recetteForm.ingredients,
  type: store.recetteForm.type,
})

const onSubmit = () => {
  if(form.titre && form.ingredients && form.type) {
    store.edit(idRecette, form)
    router.push('/recette-list')
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
  background-image: url('/src/assets/patisserie/chocolat.jpg');
  height: 30vh;
  background-repeat:round;
}
</style>