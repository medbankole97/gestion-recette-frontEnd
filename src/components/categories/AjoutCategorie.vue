<template>
  <div class="container">
    <h3>{{ $t("categorie.create.titre") }}</h3>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="nomCategorie" class="form-label">{{ $t("categorie.create.name") }}</label> 
        <input type="text" class="form-control" id="nomCategorie" v-model="nomCategorie" required>
      </div>
      <div class="d-flex justify-content-between">
        <router-link to="/categorie" class="btn btn-success">
          <i class="fa-solid fa-arrow-left"></i>
        </router-link>
        <button class="btn btn-success">{{ $t("categorie.create.boutton") }}</button> 
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCategorieStore } from '@store';
import { useI18n } from 'vue-i18n'; 

const { t } = useI18n(); 
const store = useCategorieStore();
const nomCategorie = ref('');

const onSubmit = () => {
  if (nomCategorie.value && nomCategorie.value.trim() !== '') {
    store.addCategorie({ nom: nomCategorie.value.trim() });
    nomCategorie.value = '';
  } else {
    alert('Le nom de la catégorie ne peut pas être vide.');
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
