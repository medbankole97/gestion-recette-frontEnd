<template>
  <div>
    <nav class="navbar bg-white px-5">
      <router-link to="/">
        <img src="/src/assets/logo.png" alt="Logo" class="logo">
      </router-link>
      <form class="d-flex justify-content-around px-5">
        <router-link to="/recette/patisserie" class="btn btn-outline-none me-3">{{ $t("recette.list.nav") }}</router-link>
        <router-link to="/recette/cuisine" class="btn btn-outline-none">{{ $t("recette.list.nav2") }}</router-link>
      </form>
      <div>
        <select id="langue" @change="changeLanguage">
          <option value="en">En</option>
          <option value="fr">Fr</option>
        </select>
      </div>
    </nav>

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
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="store.categories.length === 0">
              <td colspan="3" class="text-center">{{ $t("categorie.list.data") }}</td>
            </tr>
            <tr v-for="(categorie, index) in store.categories" :key="categorie.id">
              <td scope="row">{{ index + 1 }}</td>
              <td>{{ categorie.nom }}</td>
              <td>
                <button @click="view(categorie)" class="btn btn-xs btn-info me-4" data-bs-toggle="modal" data-bs-target="#categoryModal">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <router-link :to="`/categorie/edit/${categorie.id}`" class="btn btn-xs btn-primary me-4">
                  <i class="fa-solid fa-pen-to-square"></i>
                </router-link>
                <button @click="removeCategorie(categorie.id)" class="btn btn-xs btn-danger">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal d'Aperçu -->
    <div class="modal fade" id="categoryModal" tabindex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="categoryModalLabel">{{ $t("categorie.show.titre") }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p><strong>{{ $t("categorie.show.row1") }}:</strong> {{ current?.value?.nom }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t("categorie.show.boutton") }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCategorieStore } from '@store';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const t = useI18n();
const store = useCategorieStore();
const current = ref(null);

const view = (categorie) => {
  current.value = categorie;
};

const removeCategorie = (id) => {
  if (confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?")) {
    store.deleteCategorie(id);
  }
};

const changeLanguage = (event) => {
  const { locale } = useI18n();
  locale.value = event.target.value;
};
</script>

<style scoped>
.logo {
  width: 60px;
}

.container-fluid {
  padding: 10px 10em;
}
</style>
