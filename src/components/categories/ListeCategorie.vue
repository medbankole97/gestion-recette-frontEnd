<template>
  <div class="container-fluid">
    <h2>{{ $t("categorie.list.titre") }}</h2>
    <div class="d-flex justify-content-end mb-4">
      <router-link to="/categorie/new" class="btn btn-danger">
        <i class="fa-solid fa-plus"></i> {{ $t("categorie.list.boutton") }}
      </router-link>
    </div>
    <div class="contact-list-table">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{{ $t("categorie.list.col1") }}</th>
            <th scope="col" class="text-center">{{ $t("categorie.list.col2") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="store.categories.length === 0">
            <td colspan="3" class="text-center">{{ $t("categorie.list.data") }}</td>
          </tr>
          <tr v-for="(categorie, index) in store.categories" :key="categorie.id">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ categorie.nom }}</td>
            <td class="text-center">
              <button @click="view(categorie)" class="btn btn-xs btn-success me-2" data-bs-toggle="modal"
                data-bs-target="#categoryModal">
                <i class="fa-solid fa-eye"></i>
              </button>
              <router-link :to="`/categorie/edit/${categorie.id}`" class="btn btn-xs btn-primary me-2">
                <i class="fa-solid fa-pen-to-square"></i>
              </router-link>
              <button @click="destroy(categorie.id)" class="btn btn-xs btn-danger">
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
import { useCategorieStore } from '@store';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const t = useI18n();
const store = useCategorieStore();

const destroy = (id) => {
  try {
    const verify = window.confirm("Etes vous sûr de vouloir supprimer cette catégorie")
    if(verify) {
      store.destroy(id)
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
