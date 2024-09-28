<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-8 col-lg-6 m-auto">
        <h3 class="text-center">{{ $t("recette.create.titre") }}</h3>
        <form class="me-auto" @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="titre" class="form-label">{{ $t("recette.create.row1") }}</label>
            <input type="text" class="form-control" id="titre" v-model="recette.titre" required>
          </div>
          <div class="mb-3">
            <label for="ingredients" class="form-label">{{ $t("recette.create.row2") }}</label>
            <input type="text" class="form-control" id="ingredients" v-model="recette.ingredients" required>
          </div>
          <div class="mb-3">
            <label for="type" class="form-label">{{ $t("recette.create.row3.title") }}</label>
            <select class="form-control" id="type" v-model="recette.type" required>
              <option value="Dessert">{{ $t("recette.create.row3.select1") }}</option>
              <option value="Entrée">{{ $t("recette.create.row3.select2") }}</option>
              <option value="Plat">{{ $t("recette.create.row3.select3") }}</option>
            </select>
          </div>

          <!-- Sélection de catégorie -->
          <div class="mb-3">
            <label for="categorie" class="form-label">{{ $t("recette.create.row4.title") }}</label>
            <select class="form-control" id="categorie" v-model="recette.categorie" required>
              <option v-if="!categories.length" disabled>{{ $t('recette.create.noCategories') }}</option>
              <option v-for="categorie in categories" :key="categorie.id" :value="categorie.nom">
                {{ categorie.nom }}
              </option>
            </select>
          </div>

          <!-- Boutons -->
          <div class="d-flex justify-content-between">
            <router-link to="/recette" class="btn btn-success">
              <i class="fa-solid fa-arrow-left"></i>
            </router-link>
            <button class="btn btn-success">{{ $t("recette.create.boutton") }}</button>
          </div>
        </form>
      </div>
      
      <!-- Image de droite cachée sur les petits écrans -->
      <div class="col-md-5 d-none d-md-block hight"></div>
    </div>
  </div>
</template>


<script setup>
import { useRecetteStore } from '@store';
import { useCategorieStore } from '@store';
import { useI18n } from 'vue-i18n';
import { onMounted, ref } from 'vue';

const categorieStore = useCategorieStore();
const categories = ref([]);

onMounted(() => {
  categories.value = categorieStore.categories;
});

const recetteStore = useRecetteStore();
const recette = recetteStore.recetteForm;

const { t } = useI18n();

const onSubmit = () => {
  if (recette.titre && recette.ingredients && recette.type && recette.categorie) {
    recetteStore.add();
  } else {
    console.log("Veuillez remplir tous les champs du formulaire");
  }
};
</script>

<style scoped>
.container-fluid {
  padding: 15px;
}

.hight {
  background-image: url('/src/assets/cuisine/boulette.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
}


@media (max-width: 768px) {
  .hight {
    height: 300px; 
  }
}

@media (max-width: 576px) {
  .hight {
    display: none; 
  }

  .col-12 {
    margin-top: 20px;
  }
}

</style>
