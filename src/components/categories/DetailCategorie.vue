<template>
  <div class="container-fluid detail-container">
    

    <!-- Vérifie si la catégorie existe -->
    <div v-if="categorie" class="card shadow-lg p-4 mb-5 bg-white rounded">
      <h2 class="text-center">{{ $t("categorie.show.titre") }}</h2>
      <div class="card-body">
        <h3 class="card-title">{{ categorie.nom }}</h3>
      </div>

      <div class="text-center mt-4">
        <router-link to="/categorie" class="btn btn-primary">
          <i class="fa-solid fa-arrow-left"></i> {{ $t("categorie.show.boutton") }}
        </router-link>
      </div>
    </div>

  
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCategorieStore } from '@store';
import { useI18n } from 'vue-i18n';

const t = useI18n();
const route = useRoute();
const store = useCategorieStore();
const categorie = ref(null); // Initialise la catégorie à null

onMounted(async () => {
  try {
    const id = route.params.id;
    categorie.value = store.categories.find(cat => cat.id === parseInt(id));

    // Si la catégorie n'existe pas dans le store, on la charge depuis l'API
    if (!categorie.value) {
      await store.loadDataFromApi();
      categorie.value = store.categories.find(cat => cat.id === parseInt(id));
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de la catégorie:", error.message);
  }
});
</script>

<style scoped>
.detail-container {
  max-width: 800px;
  margin: 2em auto;
  padding: 2em;
  /* background-color: #f8f9fa; */
  border-radius: 10px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
}

.card {
  background-color: #fff;
  border: none;
  border-radius: 10px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-title {
  font-size: 2em;
  font-weight: bold;
  color: #343a40;
}

.card-text {
  font-size: 1.2em;
  color: #6c757d;
}

.btn {
  font-size: 1.2em;
  padding: 10px 20px;
}
</style>
