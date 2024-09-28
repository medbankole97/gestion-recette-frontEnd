<template>
  <div class="container">
    <h3>Modifier la catégorie</h3>
    <form @submit.prevent="onEdit">
      <div class="mb-3">
        <label for="nomCategorie" class="form-label">Nom de la catégorie</label>
        <input type="text" class="form-control" id="nomCategorie" v-model="form.nom" required>
      </div>
      <div class="d-flex justify-content-between">
            <router-link to="/categorie" class="btn btn-success"><i class="fa-solid fa-arrow-left"></i></router-link>
            <button class="btn btn-success">{{ $t("recette.edit.boutton") }}</button>
          </div>
    </form>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCategorieStore } from '@store';
import { useRoute, useRouter } from 'vue-router';

const store = useCategorieStore();
const route = useRoute();
const router = useRouter();
const form = store.categorieForm

const idCategorie = route.params.id
const onEdit = async () => {
  try {
    store.update(idCategorie, {
      nom: form.nom
    })
    router.push('/categorie')
  } catch (error) {
    console.log(error.message);
  }
};

onMounted(() => {
  store.loadDataFromApi()
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
