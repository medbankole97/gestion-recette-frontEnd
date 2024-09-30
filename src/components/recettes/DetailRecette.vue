<template>
  <div class="container-fluid">
    <h2>{{ $t("recette.detail.titre") }}</h2>
    <div v-if="recette">
      <p><strong>{{ $t("recette.detail.row1") }}:</strong> {{ recette.titre }}</p>
      <p><strong>{{ $t("recette.detail.row2") }}:</strong> {{ recette.ingredients }}</p>
      <p><strong>{{ $t("recette.detail.row3") }}:</strong> {{ recette.type }}</p>
      <p><strong>{{ $t("recette.detail.row4") }}:</strong> {{ recette.nom }}</p> <!-- Catégorie -->
    </div>
    <div v-else>
      <p>{{ $t("recette.detail.noData") }}</p>
    </div>
    <router-link to="/recette" class="btn btn-secondary">
      {{ $t("recette.detail.retour") }}
    </router-link>
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
const recette = ref(null);

onMounted(async () => {
  const id = route.params.id;
  // Appel pour charger la recette avec son id
  recette.value = await store.getById(id);
});
</script>

<style scoped>
.container-fluid {
  padding: 10px 10em;
}
</style>
