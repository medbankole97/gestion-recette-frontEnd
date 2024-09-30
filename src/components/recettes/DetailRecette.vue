<template>
  <div class="container-fluid detail-container">
    <!-- Vérifie si la recette est disponible -->
    <div v-if="recette" class="card shadow-lg p-4 mb-5 bg-white rounded">
      <h2 class="text-center">{{ $t("recette.show.titre") }}</h2>

      <div class="card-body">
        <h3 class="card-title">{{ recette.titre }}</h3>
        <p class="card-text"><strong>{{ $t("recette.show.row2") }}:</strong> {{ recette.ingredients }}</p>
        <p class="card-text"><strong>{{ $t("recette.show.row3") }}:</strong> {{ recette.type }}</p>
        <p class="card-text"><strong>{{ $t("recette.show.row4") }}:</strong> {{ recette.nom }}</p>
      </div>

      <div class="text-center mt-4">
        <router-link to="/recette" class="btn btn-primary">
          <i class="fa-solid fa-arrow-left"></i> {{ $t("recette.show.boutton") }}
        </router-link>
      </div>
    </div>

    <!-- Si aucune recette n'est trouvée, affiche un message d'erreur -->
    <div v-else class="alert alert-warning text-center">
      {{ $t("recette.show.noData") }} <!-- Assurez-vous d'ajouter cette clé de traduction -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useRecetteStore } from '@store';
import { useI18n } from 'vue-i18n';

const t = useI18n();
const route = useRoute();
const store = useRecetteStore();
const recette = ref(null); // Initialiser à null

onMounted(async () => {
  try {
    const id = route.params.id;
    recette.value = await store.getById(id);
  } catch (error) {
    console.error("Erreur lors de la récupération de la recette:", error.message);
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
  /* border-radius: 10px; */
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
