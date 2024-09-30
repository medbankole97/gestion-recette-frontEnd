<template>
  <div class="container-fluid">
    <h2>{{ $t("recette.show.titre") }}</h2>
    <div v-if="recette">
      <p><strong>{{ $t("recette.show.row1") }}:</strong> {{ recette.titre }}</p>
      <p><strong>{{ $t("recette.show.row2") }}:</strong> {{ recette.ingredients }}</p>
      <p><strong>{{ $t("recette.show.row3") }}:</strong> {{ recette.type }}</p>
      <p><strong>{{ $t("recette.show.row4") }}:</strong> {{ recette.nom }}</p>
    </div>
    <router-link to="/recette" class="btn btn-secondary">
      {{ $t("recette.show.boutton") }}
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
  recette.value = await store.getById(id);
});
</script>

<style scoped>
.container-fluid {
  padding: 10px 10em;
}
</style>