<template>
  <div class="container-fluid">
    <h2>{{ $t("categorie.show.titre") }}</h2>
    <div v-if="categorie">
      <p><strong>{{ $t("categorie.show.nom") }}:</strong> {{ categorie.nom }}</p>
    </div>
    <router-link to="/categorie" class="btn btn-secondary">
      {{ $t("categorie.show.boutton") }}
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCategorieStore } from '@store';

const route = useRoute();
const store = useCategorieStore();
const categorie = ref(null);

onMounted(() => {
  const id = route.params.id;
  categorie.value = store.categories.find(cat => cat.id === parseInt(id));

  // Si la catégorie n'existe pas encore, tu peux forcer un rechargement depuis l'API
  if (!categorie.value) {
    store.loadDataFromApi().then(() => {
      categorie.value = store.categories.find(cat => cat.id === parseInt(id));
    });
  }
});
</script>

<style scoped>
.container-fluid {
  padding: 10px 10em;
}
</style>
