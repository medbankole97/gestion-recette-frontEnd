<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-7 m-auto">
        <h3 class="text-center">{{ $t("recette.edit.titre") }}</h3>
        <form class="me-auto" @submit.prevent="onEdit">
          <div class="mb-3">
            <label for="titre" class="form-label">{{ $t("recette.edit.row1") }}</label>
            <input type="text" class="form-control" id="titre" v-model="titre">
          </div>
          <div class="mb-3">
            <label for="ingredients" class="form-label">{{ $t("recette.edit.row2") }}</label>
            <input type="text" class="form-control" id="ingredients" v-model="ingredients">
          </div>
          <div class="mb-3">
            <label for="type" class="form-label">{{ $t("recette.edit.row3.title") }}</label>
            <select class="form-control" id="type" v-model="type">
              <option value="Dessert">{{ $t("recette.edit.row3.select1") }}</option>
              <option value="Entrée">{{ $t("recette.edit.row3.select2") }}</option>
              <option value="Plat">{{ $t("recette.edit.row3.select3") }}</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="categorie" class="form-label">{{ $t("recette.create.row4") }}</label>
            <select class="form-control" id="categorie" v-model="categorie" required>
              <option v-for="categorie in storeC.categories" :key="categorie.id" :value="categorie.id">
                {{ categorie.nom }}
              </option>
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
import { useRecetteStore, useCategorieStore } from '@store'
import { useI18n } from 'vue-i18n';
import { onMounted, ref } from 'vue';

const t = useI18n()
const store = useRecetteStore()
const storeC = useCategorieStore();
const route = useRoute();
const router = useRouter()

const idRecette = route.params.id
const titre = ref("")
const ingredients = ref("")
const type = ref("")
const categorie = ref(0)

const onEdit = async () => {
  console.log(titre.value, ingredients.value, type.value, categorie.value);
  
  try {
    await store.update(idRecette, {
      titre: titre.value,
      ingredients: ingredients.value,
      type: type.value,
      categorie_id: categorie.value
    })
    await store.resetForm()
    router.push('/recette')
  } catch (error) {
    alert(error.msg)
  }
}

onMounted(async () => {
  storeC.loadDataFromApi();
  const recette = await store.getById(idRecette)
  titre.value = recette.titre
  ingredients.value = recette.ingredients
  type.value = recette.type
  categorie.value = recette.id_cat
});
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