<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-6">
        <h3 class="text-center">{{ $t("recette.edit.titre") }}</h3>
        <form class="me-auto" @submit.prevent="onEdit">
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
              <option value="Entrée">{{ $t("recette.edit.row3.select2") }}</option>
              <option value="Plat">{{ $t("recette.edit.row3.select3") }}</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="categorie" class="form-label">{{ $t("recette.create.row4") }}</label>
            <select class="form-control" id="categorie" v-model="form.id_cat" required>
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
      <div class="col-md-6 hight"></div>
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

const form = ref({
  titre: "",
  ingredients: "",
  type: "",
  id_cat: 0
});

const onEdit = async () => {
  try {
    await store.update(idRecette, {
      titre: form.value.titre,
      ingredients: form.value.ingredients,
      type: form.value.type,
      categorie_id: form.value.id_cat
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
  form.value = recette
});
</script>

<style scoped>
.row {
  height: 100vh;
}

.hight {
  background-image: url('/src/assets/patisserie/gauffre.jpg');
  background-size: cover;
  height: 70vh;
  border-radius: 7px;
}
</style>