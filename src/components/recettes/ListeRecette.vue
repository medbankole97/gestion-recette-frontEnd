<template>

  <div class="container-fluid">
    <h2>{{ $t("recette.list.titre") }}</h2>
    <div class="d-flex justify-content-end mb-4 ">
      <router-link to="/recette/new" class="btn btn-danger "><i class="fa-solid fa-plus"></i> {{ $t("recette.list.boutton") }}</router-link>
    </div>
    <div class="contact-list-table">
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
          <th scope="col">#</th>
          <th scope="col">{{ $t("recette.list.col1") }}</th>
          <th scope="col">{{ $t("recette.list.col2") }}</th>
          <th scope="col">{{ $t("recette.list.col3") }}</th>
          <th scope="col">{{ $t("recette.list.col5") }}</th>
          <th scope="col">{{ $t("recette.list.col4") }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="store.recettes.length === 0">
            <td colspan="5" class="text-center">{{ $t("recette.list.data") }}</td>
          </tr>
          <tr v-for="item in store.recettes" :key="item.id">
            <td scope="row">{{ `# ${item.id} ` }}</td>
            <td>{{ item.titre }}</td>
            <td>{{ item.ingredients }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.categorie }}</td>
            <td>
              <button class="btn btn-xs btn-danger me-4" @click="destroy(item.id)">
                <i class="fa-solid fa-trash"></i>
              </button>
              <router-link :to="`/recette/edit/${item.id}`" class="btn btn-xs btn-primary me-4">
                <i class="fa-solid fa-pen-to-square"></i>
              </router-link>
              <button class="btn btn-xs btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"
                @click="view(item)">
                <i class="fa-solid fa-eye"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fw-bold text-center text-danger" id="exampleModalLabel">{{ $t("recette.show.titre") }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p><span class="fw-bold">{{ $t("recette.show.row1") }} :</span> {{ current?.titre }}</p>
              <p><span class="fw-bold">{{ $t("recette.show.row2") }} : </span>{{ current?.ingredients }}</p>
              <p><span class="fw-bold">{{ $t("recette.show.row3") }} : </span>{{ current?.type }}</p>
              <p><span class="fw-bold">{{ $t("recette.show.row4") }} : </span>{{ current?.categorie }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-bs-dismiss="modal">{{ $t("recette.show.boutton") }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useRecetteStore } from '@store'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { I18nD, useI18n } from 'vue-i18n';

const t = useI18n()

const store = useRecetteStore()
const router = useRouter()

const destroy = (id) => {
  if (confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?")) {
    store.destroy(id);
  }
};

const current = ref(null)
const view = (recette) => {
  current.value = recette
}


const { locale } = useI18n();

function changeLanguage(event)  {
  locale.value = event.target.value;
}

</script>

<style scoped>
.logo {
  width: 60px;
}

.container-fluid {
  padding: 10px 10em;
}
</style>