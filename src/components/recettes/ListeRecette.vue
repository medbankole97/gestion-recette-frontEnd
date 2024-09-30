<template>
  <div class="container-fluid">
    <h2>{{ $t("recette.list.titre") }}</h2>

    <div class="d-flex justify-content-between mb-4">
      <input 
        type="text" 
        class="form-control w-50"
        :placeholder= "$t('recette.list.holder')"
        v-model="searchQuery"
      />
      <router-link to="/recette/new" class="btn btn-danger">
        <i class="fa-solid fa-plus"></i> {{ $t("recette.list.boutton") }}
      </router-link>
    </div>
    
    <div class="contact-list-table">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{{ $t("recette.list.col1") }}</th>
            <th scope="col">{{ $t("recette.list.col2") }}</th>
            <th scope="col">{{ $t("recette.list.col3") }}</th>
            <th scope="col">{{ $t("recette.list.col4") }}</th>
            <th scope="col" class="text-center">{{ $t("recette.list.col5") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredRecettes.length === 0">
            <td colspan="6" class="text-center">{{ $t("recette.list.data") }}</td>
          </tr>
          <tr v-for="item in filteredRecettes" :key="item.id">
            <td scope="row">{{ `# ${item.id} ` }}</td>
            <td>{{ item.titre }}</td>
            <td>{{ item.ingredients }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.nom }}</td>
            <td class="text-center">
              <router-link :to="`/recette/show/${item.id}`" class="btn btn-xs btn-success me-2">
                <i class="fa-solid fa-eye"></i>
              </router-link>

              <router-link :to="`/recette/edit/${item.id}`" class="btn btn-xs btn-primary me-2">
                <i class="fa-solid fa-pen-to-square"></i>
              </router-link>
              <button class="btn btn-xs btn-danger" @click="destroy(item.id)">
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRecetteStore } from '@store';
import { useI18n } from 'vue-i18n';

const t = useI18n();
const store = useRecetteStore();
const searchQuery = ref(""); 


const filteredRecettes = computed(() => {
  if (searchQuery.value) {
    return store.recettes.filter((recette) =>
      recette.titre.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  return store.recettes;
});

const destroy = (id) => {
  try {
    const verify = window.confirm("Etes vous sûr de vouloir supprimer cette recette");
    if (verify) {
      store.destroy(id);
    }
  } catch (error) {
    console.log(error.message);
  }
}

onMounted(() => {
  store.loadDataFromApi();
});
</script>

<style scoped>
.logo {
  width: 60px;
}

.container-fluid {
  padding: 10px 10em;
}
</style>
