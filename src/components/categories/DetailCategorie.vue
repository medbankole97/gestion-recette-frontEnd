<template>
  <div class="container-fluid detail-container">
    <div class="card shadow-lg p-4 mb-5 bg-white rounded">
      <h2 class="text-center">{{ $t("categorie.show.titre") }}</h2>
      <div class="card-body">
        <h3 class="card-title">{{ categorie?.nom }}</h3>
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
const id = route.params.id;
const categorie = ref(null);

onMounted(async () => {
  try { 
    categorie.value = await store.getById(id)
  } catch (error) {
    console.log(error);
  }
});
</script>

<style scoped>
.detail-container {
  max-width: 800px;
  margin: 2em auto;
  padding: 2em;
  border-radius: 10px;
}

.card {
  background-color: #fff;
  border: none;
  border-radius: 10px;
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
