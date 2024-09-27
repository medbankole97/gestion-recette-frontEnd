<template>
  <div class="container">
    <h3>Modifier la catégorie</h3>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="nomCategorie" class="form-label">Nom de la catégorie</label>
        <input type="text" class="form-control" id="nomCategorie" v-model="nomCategorie" required>
      </div>
      <!-- <button type="submit" class="btn btn-success">Enregistrer</button> -->
      <div class="d-flex justify-content-between">
            <router-link to="/categorie" class="btn btn-success"><i class="fa-solid fa-arrow-left"></i></router-link>
            <button class="btn btn-success">{{ $t("recette.edit.boutton") }}</button>
          </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCategorieStore } from '@store';
import { useRoute } from 'vue-router';

const store = useCategorieStore();
const route = useRoute();
const nomCategorie = ref('');

onMounted(() => {
  const categorie = store.getCategorieById(route.params.id);
  if (categorie) {
    nomCategorie.value = categorie.nom;
  }
});

const onSubmit = () => {
  if (nomCategorie.value.trim() !== '') {
    store.editCategorie(route.params.id, { nom: nomCategorie.value.trim() });
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
